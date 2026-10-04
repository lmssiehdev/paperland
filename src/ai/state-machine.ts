import { Bot } from "../game/units";

export class StateMachine {
    states: any;
    state: string;
    payload: any;
    context: {};

  constructor(states: { idle: { enter: () => {}; update: (bot: Bot, ctx: CanvasRenderingContext2D) => "cut" | "exit" | "back"; }; capital: { update: (bot: Bot, ctx: CanvasRenderingContext2D) => string; }; cut: { enter: (bot: Bot) => {}; update: (bot: Bot, ctx: CanvasRenderingContext2D) => "idle" | "capture"; }; exit: { enter: (bot: Bot) => {}; update: (bot: Bot, ctx: CanvasRenderingContext2D) => "capture" | "attack"; }; capture: { update: (bot: Bot, ctx: CanvasRenderingContext2D) => "idle" | "back" | "attack"; }; back: { enter: (bot: Bot, ctx: CanvasRenderingContext2D) => void; update: (bot: Bot, ctx: CanvasRenderingContext2D) => string; }; attack: { enter: () => {}; update: (bot: Bot, ctx: CanvasRenderingContext2D) => string; }; }, state: string, payload: this) {
    this.states = states;
    this.state = "";
    this.payload = payload;
    this.context = {};
    this.change(state);
  }
  change(state: string) {
    const state2 = this.states[this.state];
    if (state2 && state2.leave) {
      this.context = state2.leave(this.payload, this.context) || this.context;
    }
    const state3 = this.states[state];
    if (state3) {
      this.state = state;
      this.context = state3.enter && state3.enter(this.payload, this.context) || this.context;
      this.update();
    }
  }
  update() {
    const state = this.states[this.state];
    const state2 = state && state.update(this.payload, this.context);
    if (state2) {
      this.change(state2);
    }
  }
}
