/**
 * One FSM state. `P` is the payload (the object the FSM drives), `N` the union of state names,
 * `C` the context object this state works with.
 *
 * Context flow: `leave` may replace the context; `enter` receives the current context and may return a
 * new one (a falsy result keeps it). A state without `enter` therefore sees the previous state's context.
 * `update` returns the next state name, or nothing to stay.
 */
export interface FsmState<P, N extends string, C extends object = object> {
  enter?(payload: P, context: object): C | void;
  update(payload: P, context: C): N | void;
  leave?(payload: P, context: C): object | void;
}

/** State table: one entry per state name. */
export type FsmStates<P, N extends string> = { [K in N]: FsmState<P, N> };

export class StateMachine<P, N extends string> {
  states: FsmStates<P, N>;
  /** Current state name; "" before the first `change`. */
  state: N | "";
  payload: P;
  context: object;

  constructor(states: FsmStates<P, N>, state: N, payload: P) {
    this.states = states;
    this.state = "";
    this.payload = payload;
    this.context = {};
    this.change(state);
  }
  change(state: N) {
    const current = this.states[this.state as N];
    if (current && current.leave) {
      this.context = current.leave(this.payload, this.context) || this.context;
    }
    const next = this.states[state];
    if (next) {
      this.state = state;
      this.context = (next.enter && next.enter(this.payload, this.context)) || this.context;
      this.update();
    }
  }
  update() {
    const current = this.states[this.state as N];
    const next = current && current.update(this.payload, this.context);
    if (next) {
      this.change(next);
    }
  }
}
