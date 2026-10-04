export class StateMachine {
  constructor(states, state, payload) {
    this.states = states;
    this.state = "";
    this.payload = payload;
    this.context = {};
    this.change(state);
  }
  change(state) {
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
