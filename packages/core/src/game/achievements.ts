import { easeOutCubic } from "../engine/math";
import type { ImageHandle } from "../handles";
import { platform } from "../platform";
import type { Game } from "./game";
import type { Player, Unit } from "./units";

/** Cookie map of completed challenge ids ("c13", "geraldquest1", ...). */
export type ChallengeFlags = Record<string, boolean>;

/** Progress tracker created per run for an unearned achievement. */
export interface AchievementChecker {
  progress: number;
  update(player: Player, dt: number, game: Game): void;
  check(player: Player, dt: number, game: Game): boolean;
  onKill(victim: Unit): void;
  onOut(): void;
}

/** Static definition passed to AchievementStore. */
export interface AchievementDefinition {
  name: string;
  /** Game modes the achievement can be earned in (e.g. "classic"). */
  modes: string[];
  getChecker: () => AchievementChecker;
  description: string;
  url: string;
  onEarned?: (game: Game, achievement: Achievement) => void;
}

/** Persisted per-achievement state. */
export interface SavedAchievement {
  name: string;
  best: number;
  earned: boolean;
}

/** Shape of the JSON stored under AchievementStore.storageName. */
interface AchievementStorage {
  achievements?: SavedAchievement[];
}

/** "New skin unlocked!" popup queued into Game.notifications. */
export class Tip {
  title: string;
  description: string;
  state: number;
  current: number;
  states: number[];
  /** Set once the icon at `url` has loaded. */
  image: ImageHandle | null;
  ready: boolean;

  constructor(title: string, description: string, url: string) {
    this.title = title;
    this.description = description;
    this.state = 0;
    this.current = 0;
    this.states = [500, 3000, 500, 250];
    this.image = null;
    if (url) {
      this.ready = false;
      // Loaded: ready with the image. Failed: ready without one (image stays null).
      platform.loadImage(url, image => {
        this.ready = true;
        this.image = image;
      });
    } else {
      this.ready = true;
    }
  }
  update(dt: number) {
    this.current += dt;
    if (this.current > this.states[this.state]) {
      this.state++;
      this.current = 0;
    }
  }
  position() {
    switch (this.state) {
      case 0:
        return easeOutCubic(this.current / this.states[0]);
      case 1:
        return 1;
      case 2:
        return 1 - easeOutCubic(this.current / this.states[2]);
      default:
        return 0;
    }
  }
}
export class Achievement {
  name: string;
  modes: string[];
  getChecker: () => AchievementChecker;
  description: string;
  url: string;
  onEarned: AchievementDefinition["onEarned"];
  best: number;
  earned: boolean;
  checker: AchievementChecker | null;

  constructor(
    name: string,
    modes: string[],
    getChecker: () => AchievementChecker,
    description: string,
    url: string,
    onEarned: AchievementDefinition["onEarned"]
  ) {
    this.name = name;
    this.modes = modes;
    this.getChecker = getChecker;
    this.description = description;
    this.url = url;
    this.onEarned = onEarned;
    this.best = 0;
    this.earned = false;
    this.checker = null;
  }
  success(game: Game) {
    this.earned = true;
    this.checker = null;
    if (this.onEarned) {
      this.onEarned(game, this);
    }
    game.notifications.push(new Tip("New skin unlocked!", this.description, this.url));
  }
}
export class AchievementStore {
  storageName: string;
  achievements: Achievement[];

  constructor(definitions: AchievementDefinition[], storageName = "paper.io.storage") {
    this.storageName = storageName;
    this.achievements = definitions.map(
      item => new Achievement(item.name, item.modes, item.getChecker, item.description, item.url, item.onEarned)
    );
  }
  load() {
    const challenges: ChallengeFlags = platform.storage.getJSON("paperio_challenges") || {};
    const loadChallenge = (challengeId: string, achievementName: string) => {
      if (challenges[challengeId]) {
        const achievement = this.achievements.find(achievement => achievement.name === achievementName);
        if (achievement) {
          achievement.earned = true;
        }
      }
    };
    loadChallenge("c13", "reaper");
    loadChallenge("c22", "capAmerica");
    loadChallenge("c22", "thanos");
    loadChallenge("geraldquest1", "geralt");
    const storage: AchievementStorage = platform.storage.getJSON(this.storageName) || {};
    if (storage.achievements) {
      storage.achievements.forEach(achievement => {
        const achievement2 = this.achievements.find(achievement2 => achievement2.name === achievement.name);
        if (achievement2) {
          achievement2.best = achievement.best || 0;
          achievement2.earned = achievement.earned || false;
        }
      });
    }
  }
  save() {
    const achievements = this.achievements.map((achievement): SavedAchievement => ({
      name: achievement.name,
      best: achievement.best,
      earned: achievement.earned
    }));
    const storage: AchievementStorage = platform.storage.getJSON(this.storageName) || {};
    storage.achievements = achievements;
    const cookieOptions = {
      expires: 365
    };
    platform.storage.set(this.storageName, storage, cookieOptions);
    const challenges: ChallengeFlags = platform.storage.getJSON("paperio_challenges") || {};
    const saveChallenge = (challengeId: string, achievementName: string) => {
      const achievement = this.achievements.find(achievement => achievement.name === achievementName);
      if (achievement && achievement.earned) {
        challenges[challengeId] = true;
      }
    };
    saveChallenge("c13", "reaper");
    saveChallenge("c22", "capAmerica");
    saveChallenge("c22", "thanos");
    saveChallenge("geraldquest1", "geralt");
    saveChallenge("sanitizerquest", "sanitizer");
    saveChallenge("doctorquest", "doctor");
    saveChallenge("covidquest", "covid");
    platform.storage.set("paperio_challenges", challenges, cookieOptions);
  }
}
export class AchievementsProfile {
  profile: AchievementStore;
  /**
   * Assigned in the constructor (it returns early only for a missing store, which Game.addPlayer never passes).
   * Every entry has a non-null checker: the constructor sets it, and success() clears it only right before
   * update() drops that entry.
   */
  achievements!: Achievement[];

  constructor(profile: AchievementStore, mode: string) {
    this.profile = profile;
    if (!this.profile) {
      return;
    }
    this.achievements = profile.achievements.filter(achievement => {
      const result = !achievement.earned && achievement.modes.some(achievementMode => achievementMode === mode);
      if (result) {
        achievement.checker = achievement.getChecker();
      }
      return result;
    });
  }
  update(player: Player, dt: number, game: Game) {
    this.achievements = this.achievements.filter(achievement => {
      achievement.checker!.update(player, dt, game);
      if (achievement.checker!.progress > achievement.best) {
        achievement.best = achievement.checker!.progress;
      }
      if (achievement.checker!.check(player, dt, game)) {
        achievement.success(game);
        this.profile.save();
        return false;
      }
      return true;
    });
  }
  finish() {
    this.achievements = [];
    this.profile.save();
  }
  onKill(unit: Unit) {
    this.achievements.forEach(achievement => {
      achievement.checker!.onKill(unit);
    });
  }
  onOut() {
    this.achievements.forEach(achievement => {
      achievement.checker!.onOut();
    });
  }
}
