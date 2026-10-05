import type { PlatformStorage } from "@paperio/core/platform";

// Browser persistence for the profile ("paper.io.storage") and challenges ("paperio_challenges"): JSON in
// localStorage. Older builds kept these in js-cookie cookies; the first read or write of a key copies its
// cookie over and expires it, so saved names, skins and achievements survive the switch.

/** Cookie value as js-cookie wrote it (JSON, percent-encoded), or null if there is no such cookie. */
const readCookie = (key: string): string | null => {
  for (const pair of document.cookie ? document.cookie.split("; ") : []) {
    const separator = pair.indexOf("=");
    if (pair.slice(0, separator) === key) {
      try {
        return pair.slice(separator + 1).replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      } catch {
        return null;
      }
    }
  }
  return null;
};

const migrateCookie = (key: string): void => {
  if (localStorage.getItem(key) !== null) {
    return;
  }
  const value = readCookie(key);
  if (value === null) {
    return;
  }
  try {
    JSON.parse(value);
    localStorage.setItem(key, value);
  } catch {
    // Not JSON (or storage full): drop it, as js-cookie's getJSON would have returned junk anyway.
  }
  // js-cookie's default path was "/".
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const localStorageJSON: PlatformStorage = {
  getJSON<T>(key: string): T | undefined {
    try {
      migrateCookie(key);
      const value = localStorage.getItem(key);
      // SAFETY: each key is read back as the type its single writer stored.
      return value === null ? undefined : (JSON.parse(value) as T);
    } catch {
      return undefined;
    }
  },
  set(key, value) {
    try {
      migrateCookie(key);
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage disabled or full: the value just isn't persisted.
    }
  }
};
