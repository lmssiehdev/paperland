import { useState } from "preact/hooks";
import { platform } from "@paperio/core/platform";

/** Storage key of the profile. Core's AchievementStore keeps `achievements` under the same key. */
const PROFILE_KEY = "paper.io.storage";

/** The menu's persisted state (name, best score, skin). */
export interface Profile {
  nickName: string;
  bestScore: number;
  skin: string;
}

const readProfile = (): Profile => {
  const stored = platform.storage.getJSON<Partial<Profile>>(PROFILE_KEY) ?? {};
  return { nickName: stored.nickName || "", bestScore: stored.bestScore || 0, skin: stored.skin || "" };
};

/**
 * The stored profile and `update(patch)`, which merges the patch into what is stored right now (re-read
 * first), so other fields under the same key, such as core's `achievements`, are kept.
 */
export const useStoredProfile = (): [Profile, (patch: Partial<Profile>) => void] => {
  const [profile, setProfile] = useState(readProfile);
  const update = (patch: Partial<Profile>): void => {
    const stored = platform.storage.getJSON<object>(PROFILE_KEY) ?? {};
    platform.storage.set(PROFILE_KEY, { ...stored, ...patch });
    setProfile(current => ({ ...current, ...patch }));
  };
  return [profile, update];
};
