export class KeyboardModeSwitch {
    mode2: boolean;

  constructor() {
    this.mode2 = false;
  }
  get() {
    return this.mode2;
  }
  switch() {}
}
export class Controller {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    modifiers: { shift: boolean; ctrl: boolean; alt: boolean; meta: boolean; };
    mouse: {};
    lastMouse: {};
    buttons: { left: boolean; middle: boolean; right: boolean; };
    codes: any[];
    sets: any[];
    keyboardModeSwitch: KeyboardModeSwitch;
    pressedButtons: any[];
    dispose: () => void;

  constructor(view: { addEventListener: (arg0: string, arg1: { (event: any): any; (event: any): void; (event: any): void; (event: any): void; (_0x5d0f61: any): void; (_0x2c9dbd: any): void; (event: any): void; (event: any): void; (event: any): void; (event: any): void; }, arg2: boolean) => void; removeEventListener: (arg0: string, arg1: { (event: any): any; (event: any): void; (event: any): void; (event: any): void; (_0x5d0f61: any): void; (_0x2c9dbd: any): void; }, arg2: boolean) => void; }, keyboardModeSwitch: KeyboardModeSwitch) {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.modifiers = {
      shift: false,
      ctrl: false,
      alt: false,
      meta: false
    };
    this.mouse = null;
    this.lastMouse = null;
    this.buttons = {
      left: false,
      middle: false,
      right: false
    };
    this.codes = [];
    this.sets = [];
    this.keyboardModeSwitch = keyboardModeSwitch;
    this.pressedButtons = [];
    const _0x45f58d = (event: any) => this.onKeyChange(event, true);
    const _0x5b7c33 = (event: any) => this.onKeyChange(event, false);
    if (keyboardModeSwitch) {
      keyboardModeSwitch.get();
      window.addEventListener("keydown", _0x45f58d, false);
      window.addEventListener("keyup", _0x5b7c33, false);
    }
    const _0x285b73 = (event: any) => event.preventDefault();
    view.addEventListener("contextmenu", _0x285b73, false);
    const _0x5aba7e = (_0x5d0f61: { button: any; }): any => this.onMouseChange(_0x5d0f61, true);
    const _0x48778e = (_0x2c9dbd: { button: any; }): any => this.onMouseChange(_0x2c9dbd, false);
    const _0x36c59b = (event: any) => {
      this.lastMouse = this.mouse;
      this.mouse = null;
      event.preventDefault();
    };
    const _0x4e6057 = (event: any) => {
      if (this.mouse === null) {
        this.mouse = {};
      }
      this.mouse.x = event.pageX;
      this.mouse.y = event.pageY;
      event.preventDefault();
    };
    const _0x14f737 = (event: any) => {
      _0x4e6057(event);
      const {
        buttons
      } = event;
      this.buttons = {
        left: !!(buttons & 1),
        middle: !!(buttons & 4),
        right: !!(buttons & 2)
      };
      event.preventDefault();
    };
    view.addEventListener("mouseenter", _0x14f737, false);
    view.addEventListener("mousemove", _0x4e6057, false);
    view.addEventListener("mouseleave", _0x36c59b, false);
    view.addEventListener("mousedown", _0x5aba7e, false);
    view.addEventListener("mouseup", _0x48778e, false);
    const _0x3f4b7e = (event: any) => {
      this.lastMouse = this.mouse;
      this.mouse = null;
      event.preventDefault();
    };
    const _0x137951 = (event: any) => {
      if (this.mouse === null) {
        this.mouse = {};
      }
      const changedTouch = event.changedTouches[0];
      this.mouse.x = changedTouch.clientX;
      this.mouse.y = changedTouch.clientY;
      event.preventDefault();
    };
    view.addEventListener("touchstart", _0x137951, false);
    view.addEventListener("touchmove", _0x137951, false);
    view.addEventListener("touchend", _0x3f4b7e, false);
    view.addEventListener("touchcancel", _0x3f4b7e, false);
    this.dispose = () => {
      view.removeEventListener("contextmenu", _0x285b73, false);
      if (keyboardModeSwitch) {
        window.removeEventListener("keydown", _0x45f58d, false);
        window.removeEventListener("keyup", _0x5b7c33, false);
      }
      view.removeEventListener("mouseenter", _0x14f737, false);
      view.removeEventListener("mousemove", _0x4e6057, false);
      view.removeEventListener("mouseleave", _0x36c59b, false);
      view.removeEventListener("mousedown", _0x5aba7e, false);
      view.removeEventListener("mouseup", _0x48778e, false);
    };
  }
  pressed() {
    return this.up || this.down || this.left || this.right;
  }
  onKeyChange(event: any, up: boolean) {
    if (event.target === document.body) {
      let _0x10b4f0 = true;
      const {
        keyCode
      } = event;
      const index = this.pressedButtons.indexOf(keyCode);
      if (up) {
        if (index < 0) {
          this.pressedButtons.push(keyCode);
        }
        const set = this.sets.find(set => set.codes.every((code: any): any => this.pressedButtons.find(pressedButton => pressedButton === code)));
        if (set) {
          set.handler();
        }
      } else {
        if (index >= 0) {
          this.pressedButtons.splice(index, 1);
        }
        const code = this.codes.find(code => code.code === keyCode);
        if (code) {
          code.handler();
        }
      }
      switch (keyCode) {
        case 38:
        case 87:
          this.up = up;
          break;
        case 40:
        case 83:
          this.down = up;
          break;
        case 37:
        case 65:
          this.left = up;
          break;
        case 39:
        case 68:
          this.right = up;
          break;
        case 67:
          if (!up) {
            this.keyboardModeSwitch.switch();
          }
          break;
        default:
          _0x10b4f0 = false;
          break;
      }
      this.modifiers.shift = event.shiftKey;
      this.modifiers.ctrl = event.ctrlKey;
      this.modifiers.alt = event.altKey;
      this.modifiers.meta = event.metaKey;
      if (_0x10b4f0) {
        event.preventDefault();
      }
    }
  }
  onMouseChange(_0x323ccf: { button: any; }, _0xfc9f32: boolean) {
    switch (_0x323ccf.button) {
      case 0:
        this.buttons.left = _0xfc9f32;
        break;
      case 1:
        this.buttons.middle = _0xfc9f32;
        break;
      case 2:
        this.buttons.right = _0xfc9f32;
        break;
    }
  }
  addButton(_0x3af9c9: any, _0x25ce8f: any) {
    this.codes.push({
      code: _0x3af9c9,
      handler: _0x25ce8f
    });
  }
  addSet(_0x24bcaa: any[], _0x4c1a93: any) {
    this.sets.push({
      codes: _0x24bcaa.sort(),
      handler: _0x4c1a93
    });
  }
}
