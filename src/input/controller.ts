/** Pointer position in page/client pixels. */
export interface PointerPosition {
  x: number;
  y: number;
}

/** Handler bound to a single key code (fires on key up). */
export interface KeyBinding {
  code: number;
  handler: () => void;
}

/** Handler fired on key down once all `codes` are held together. */
export interface KeyChord {
  codes: number[];
  handler: () => void;
}

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
    /** Null while the pointer is outside the view (or before it first moves in). */
    mouse: PointerPosition | null;
    lastMouse: PointerPosition | null;
    buttons: { left: boolean; middle: boolean; right: boolean; };
    codes: KeyBinding[];
    sets: KeyChord[];
    keyboardModeSwitch: KeyboardModeSwitch;
    pressedButtons: number[];
    dispose: () => void;

  constructor(view: HTMLElement, keyboardModeSwitch: KeyboardModeSwitch) {
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
    const onKeyDown = (event: KeyboardEvent) => this.onKeyChange(event, true);
    const onKeyUp = (event: KeyboardEvent) => this.onKeyChange(event, false);
    if (keyboardModeSwitch) {
      keyboardModeSwitch.get();
      window.addEventListener("keydown", onKeyDown, false);
      window.addEventListener("keyup", onKeyUp, false);
    }
    const onContextMenu = (event: Event) => event.preventDefault();
    view.addEventListener("contextmenu", onContextMenu, false);
    const onMouseDown = (event: MouseEvent): void => this.onMouseChange(event, true);
    const onMouseUp = (event: MouseEvent): void => this.onMouseChange(event, false);
    const onMouseLeave = (event: MouseEvent) => {
      this.lastMouse = this.mouse;
      this.mouse = null;
      event.preventDefault();
    };
    const onMouseMove = (event: MouseEvent) => {
      if (this.mouse === null) {
        this.mouse = {} as PointerPosition;
      }
      this.mouse.x = event.pageX;
      this.mouse.y = event.pageY;
      event.preventDefault();
    };
    const onMouseEnter = (event: MouseEvent) => {
      onMouseMove(event);
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
    view.addEventListener("mouseenter", onMouseEnter, false);
    view.addEventListener("mousemove", onMouseMove, false);
    view.addEventListener("mouseleave", onMouseLeave, false);
    view.addEventListener("mousedown", onMouseDown, false);
    view.addEventListener("mouseup", onMouseUp, false);
    const onTouchEnd = (event: TouchEvent) => {
      this.lastMouse = this.mouse;
      this.mouse = null;
      event.preventDefault();
    };
    const onTouchMove = (event: TouchEvent) => {
      if (this.mouse === null) {
        this.mouse = {} as PointerPosition;
      }
      const changedTouch = event.changedTouches[0];
      this.mouse.x = changedTouch.clientX;
      this.mouse.y = changedTouch.clientY;
      event.preventDefault();
    };
    view.addEventListener("touchstart", onTouchMove, false);
    view.addEventListener("touchmove", onTouchMove, false);
    view.addEventListener("touchend", onTouchEnd, false);
    view.addEventListener("touchcancel", onTouchEnd, false);
    this.dispose = () => {
      view.removeEventListener("contextmenu", onContextMenu, false);
      if (keyboardModeSwitch) {
        window.removeEventListener("keydown", onKeyDown, false);
        window.removeEventListener("keyup", onKeyUp, false);
      }
      view.removeEventListener("mouseenter", onMouseEnter, false);
      view.removeEventListener("mousemove", onMouseMove, false);
      view.removeEventListener("mouseleave", onMouseLeave, false);
      view.removeEventListener("mousedown", onMouseDown, false);
      view.removeEventListener("mouseup", onMouseUp, false);
    };
  }
  pressed() {
    return this.up || this.down || this.left || this.right;
  }
  onKeyChange(event: KeyboardEvent, isDown: boolean) {
    if (event.target === document.body) {
      let handled = true;
      const {
        keyCode
      } = event;
      const index = this.pressedButtons.indexOf(keyCode);
      if (isDown) {
        if (index < 0) {
          this.pressedButtons.push(keyCode);
        }
        const set = this.sets.find(set => set.codes.every(code => this.pressedButtons.find(pressedButton => pressedButton === code)));
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
          this.up = isDown;
          break;
        case 40:
        case 83:
          this.down = isDown;
          break;
        case 37:
        case 65:
          this.left = isDown;
          break;
        case 39:
        case 68:
          this.right = isDown;
          break;
        case 67:
          if (!isDown) {
            this.keyboardModeSwitch.switch();
          }
          break;
        default:
          handled = false;
          break;
      }
      this.modifiers.shift = event.shiftKey;
      this.modifiers.ctrl = event.ctrlKey;
      this.modifiers.alt = event.altKey;
      this.modifiers.meta = event.metaKey;
      if (handled) {
        event.preventDefault();
      }
    }
  }
  onMouseChange(event: MouseEvent, isDown: boolean) {
    switch (event.button) {
      case 0:
        this.buttons.left = isDown;
        break;
      case 1:
        this.buttons.middle = isDown;
        break;
      case 2:
        this.buttons.right = isDown;
        break;
    }
  }
  /** Calls `handler` when the key `code` is released. */
  addButton(code: number, handler: () => void) {
    this.codes.push({
      code: code,
      handler: handler
    });
  }
  /** Calls `handler` when all keys in `codes` are held down together. */
  addSet(codes: number[], handler: () => void) {
    this.sets.push({
      codes: codes.sort(),
      handler: handler
    });
  }
}
