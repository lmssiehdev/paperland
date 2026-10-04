import type { ModeId } from "@paperio/core/modes/index";
import type { GameData } from "./game-data";
import { Room } from "./room";

export interface RoomManagerOptions {
  tickRate?: number;
  warmUp?: boolean;
}

/** Creates rooms on demand (one per mode for now) and keeps them ticking. */
export class RoomManager {
  private readonly rooms = new Map<string, Room>();

  constructor(
    private readonly data: GameData,
    private readonly options: RoomManagerOptions = {}
  ) {}

  /** An existing room of `mode`, or a new started one. */
  find(mode: ModeId = "classic"): Room {
    for (const room of this.rooms.values()) {
      if (room.mode === mode) {
        return room;
      }
    }
    const room = new Room({ id: crypto.randomUUID().slice(0, 8), data: this.data, mode, ...this.options });
    this.rooms.set(room.id, room);
    room.start();
    return room;
  }

  get(id: string): Room | undefined {
    return this.rooms.get(id);
  }

  get size(): number {
    return this.rooms.size;
  }

  stopAll(): void {
    for (const room of this.rooms.values()) {
      room.stop();
    }
    this.rooms.clear();
  }
}
