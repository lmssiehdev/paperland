import type { ImageHandle, PathHandle } from "./handles";

/** Key-value persistence (client: cookies via js-cookie). */
export interface PlatformStorage {
  getJSON<T>(key: string): T | undefined;
  set(key: string, value: object, options: { expires: number }): void;
}

/**
 * Process-wide services core needs from its host. The defaults are headless (no drawing, no images,
 * in-memory storage); the client installs browser versions with setPlatform() before creating a game.
 */
export interface Platform {
  /** A new empty path for drawing a polygon/polyline. */
  createPath(): PathHandle;
  /** Starts loading an image and calls `done` with it, or with null if it fails. */
  loadImage(url: string, done: (image: ImageHandle | null) => void): void;
  storage: PlatformStorage;
}

// Assertion, not annotation: in the client PathHandle is widened to Path2D (see handles.ts).
// SAFETY: core only calls moveTo/lineTo/closePath on its paths; the client installs Path2D before anything is drawn.
const headlessPath = {
  moveTo(_x: number, _y: number) {},
  lineTo(_x: number, _y: number) {},
  closePath() {}
} as PathHandle;
const memoryStorage = new Map<string, object>();

export const platform: Platform = {
  createPath: () => headlessPath,
  loadImage: (_url, done) => done(null),
  storage: {
    // SAFETY: each key is read back as the type its single writer (AchievementStore) stored.
    getJSON: <T>(key: string) => memoryStorage.get(key) as T | undefined,
    set: (key, value) => {
      memoryStorage.set(key, value);
    }
  }
};

export const setPlatform = (overrides: Partial<Platform>): void => {
  Object.assign(platform, overrides);
};
