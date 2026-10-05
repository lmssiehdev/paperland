import { BitStream, ProtocolError } from "../bit-stream";
import { DiedMsg } from "./died";
import { InputMsg } from "./input";
import { JoinMsg } from "./join";
import { JoinedMsg } from "./joined";
import { MsgType } from "./shared";
import { UpdateMsg } from "./update";

export type ClientMessage = JoinMsg | InputMsg;
export type ServerMessage = JoinedMsg | UpdateMsg | DiedMsg;
export type Message = ClientMessage | ServerMessage;

const CLIENT_MESSAGES: Partial<Record<MsgType, new () => ClientMessage>> = {
  [MsgType.Join]: JoinMsg,
  [MsgType.Input]: InputMsg
};
const SERVER_MESSAGES: Partial<Record<MsgType, new () => ServerMessage>> = {
  [MsgType.Joined]: JoinedMsg,
  [MsgType.Update]: UpdateMsg,
  [MsgType.Died]: DiedMsg
};

/** One binary frame: each message is its type byte plus its fields, padded to a whole byte. */
export function encodeMessages(...messages: Message[]): Uint8Array {
  const s = new BitStream(64);
  for (const message of messages) {
    s.writeUint8(message.type);
    message.serialize(s);
    s.writeAlignToByte();
  }
  return s.toBytes();
}

function decode<M extends Message>(bytes: Uint8Array, table: Partial<Record<MsgType, new () => M>>): M[] {
  const s = new BitStream(bytes);
  const messages: M[] = [];
  while (s.remainingBits >= 8) {
    const type = s.readUint8();
    // SAFETY: any byte is a valid lookup key; unknown types miss and throw below.
    const MessageClass = table[type as MsgType];
    if (!MessageClass) {
      throw new ProtocolError(`unexpected message type ${type}`);
    }
    const message = new MessageClass();
    message.deserialize(s);
    s.readAlignToByte();
    messages.push(message);
  }
  return messages;
}

/** Server side: decodes a frame from a client. Throws ProtocolError on server-only or unknown types. */
export const decodeClientMessages = (bytes: Uint8Array): ClientMessage[] => decode(bytes, CLIENT_MESSAGES);

/** Client side: decodes a frame from the server. */
export const decodeServerMessages = (bytes: Uint8Array): ServerMessage[] => decode(bytes, SERVER_MESSAGES);
