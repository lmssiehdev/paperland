import { easeOutCubic } from "../engine/math.js";
import Cookies from "js-cookie";

class Tip {
  constructor(title, description, url) {
    this.title = title;
    this.description = description;
    this.state = 0;
    this.current = 0;
    this.states = [500, 3000, 500, 250];
    this.image = null;
    if (url) {
      this.ready = false;
      const image = new Image();
      image.onload = () => {
        this.ready = true;
        this.image = image;
      };
      image.onerror = () => {
        this.ready = true;
      };
      image.src = url;
    } else {
      this.ready = true;
    }
  }
  update(_0x4344b8) {
    this.current += _0x4344b8;
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
class Achievement {
  constructor(name, modes, getChecker, description, url, onEarned) {
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
  success(_0x282f99) {
    this.earned = true;
    if (window.ga) {
      window.ga("send", "event", "skins_unlock", this.name);
    }
    this.checker = null;
    if (this.onEarned) {
      this.onEarned(_0x282f99, this);
    }
    _0x282f99.notifications.push(new Tip("New skin unlocked!", this.description, this.url));
  }
}
export class AchievementStore {
  constructor(_0x192743, storageName = "paper.io.storage") {
    this.storageName = storageName;
    this.achievements = _0x192743.map(item => new Achievement(item.name, item.modes, item.getChecker, item.description, item.url, item.onEarned));
  }
  load() {
    const _0x5ed92b = Cookies.getJSON("paperio_challenges") || {};
    const _0xea5cb3 = (_0x327d6e, _0x59e923) => {
      if (_0x5ed92b[_0x327d6e]) {
        const achievement = this.achievements.find(achievement => achievement.name === _0x59e923);
        if (achievement) {
          achievement.earned = true;
        }
      }
    };
    _0xea5cb3("c13", "reaper");
    _0xea5cb3("c22", "capAmerica");
    _0xea5cb3("c22", "thanos");
    _0xea5cb3("geraldquest1", "geralt");
    const _0x3b1c17 = Cookies.getJSON(this.storageName) || {};
    if (_0x3b1c17.achievements) {
      _0x3b1c17.achievements.forEach(achievement => {
        const achievement2 = this.achievements.find(achievement2 => achievement2.name === achievement.name);
        if (achievement2) {
          achievement2.best = achievement.best || 0;
          achievement2.earned = achievement.earned || false;
        }
      });
    }
  }
  save() {
    const achievements = this.achievements.map(achievement => ({
      name: achievement.name,
      best: achievement.best,
      earned: achievement.earned
    }));
    const y = Cookies.getJSON(this.storageName) || {};
    y.achievements = achievements;
    const _0x4abe97 = {
      expires: 365
    };
    Cookies.set(this.storageName, y, _0x4abe97);
    const y2 = Cookies.getJSON("paperio_challenges") || {};
    const _0x24c73d = (_0x146a69, _0x3ef66a) => {
      const achievement = this.achievements.find(achievement => achievement.name === _0x3ef66a);
      if (achievement && achievement.earned) {
        y2[_0x146a69] = true;
      }
    };
    _0x24c73d("c13", "reaper");
    _0x24c73d("c22", "capAmerica");
    _0x24c73d("c22", "thanos");
    _0x24c73d("geraldquest1", "geralt");
    _0x24c73d("sanitizerquest", "sanitizer");
    _0x24c73d("doctorquest", "doctor");
    _0x24c73d("covidquest", "covid");
    Cookies.set("paperio_challenges", y2, _0x4abe97);
    window.paperio_challenges = y2;
    if (window.shop) {
      window.shop.autoCheckUnlock();
    } else {
      console.log("window.shop unavaliable");
    }
  }
}
export class AchievementsProfile {
  constructor(profile, _0x4a9dcc) {
    this.profile = profile;
    if (!this.profile) {
      return;
    }
    this.achievements = profile.achievements.filter(achievement => {
      const result = !achievement.earned && achievement.modes.some(mode => mode === _0x4a9dcc);
      if (result) {
        achievement.checker = achievement.getChecker();
      }
      return result;
    });
  }
  update(_0x3caeb5, _0x2f04e5, _0x4592e0) {
    this.achievements = this.achievements.filter(achievement => {
      achievement.checker.update(_0x3caeb5, _0x2f04e5, _0x4592e0);
      if (achievement.checker.progress > achievement.best) {
        achievement.best = achievement.checker.progress;
      }
      if (achievement.checker.check(_0x3caeb5, _0x2f04e5, _0x4592e0)) {
        achievement.success(_0x4592e0);
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
  onKill(unit) {
    this.achievements.forEach(achievement => {
      achievement.checker.onKill(unit);
    });
  }
  onOut() {
    this.achievements.forEach(achievement => {
      achievement.checker.onOut();
    });
  }
}
