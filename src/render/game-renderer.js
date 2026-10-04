import { Vec2 } from "../engine/vec2.js";
import { renderDebugOverlay } from "./debug-overlay.js";

let _0x2d02fe;
let _0x3ee25a;
let _0x5fb03a;
let _0x260d10;
const _0x38959a = (ctx, space, backgroundTopColor, backgroundBottomColor) => {
  if (_0x260d10 !== ctx || _0x3ee25a !== backgroundTopColor || _0x5fb03a !== backgroundBottomColor) {
    _0x2d02fe = ctx.createLinearGradient(space.width / 2, 0, space.width / 2, space.height);
    _0x2d02fe.addColorStop(0, backgroundTopColor);
    _0x2d02fe.addColorStop(1, backgroundBottomColor);
  }
  return _0x2d02fe;
};
const _0x421233 = (ctx, path, back, _0x22210a) => {
  ctx.strokeStyle = back;
  ctx.lineWidth = _0x22210a;
  ctx.stroke(path);
};
const _0x417956 = (ctx, _0x2f469d, track, position, trackWidth) => {
  if (track.polyline.segments.length) {
    ctx.lineWidth = trackWidth;
    ctx.strokeStyle = _0x2f469d;
    ctx.stroke(track.polyline.path);
  }
};
const _0x3f43e3 = (ctx, unit, scale, scaler, font) => {
  const {
    devicePixelRatio
  } = window;
  const _0x206cf1 = scaler * 24 / devicePixelRatio;
  const _0x42bf58 = scaler * 4 / devicePixelRatio;
  ctx.save();
  ctx.translate(unit.position.x, unit.position.y);
  ctx.scale(1.001 / scale, 1.001 / scale);
  ctx.font = _0x206cf1 + "px " + font;
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  let name = unit.name;
  if (unit == unit.game.player) {
    if (new Date().getSeconds() % 2 == 0) {
      if (unit.game.recording) {
        name = "Recording";
      } else if (unit.game.replaying) {
        name = "Replaying";
      }
    }
  }
  const _0x44a8ff = ~~(scale * -12);
  const _0x5b98dc = "#363331";
  ctx.lineWidth = _0x42bf58 / 4;
  ctx.strokeStyle = _0x5b98dc;
  ctx.shadowColor = _0x5b98dc;
  ctx.shadowBlur = _0x42bf58 / 2;
  ctx.strokeText(name, 0, _0x44a8ff);
  ctx.fillStyle = _0x5b98dc;
  ctx.fillText(name, 2, _0x44a8ff + 2);
  let _0xdb172b = "#dddddd";
  const asset = unit.skin.assets.find(asset => asset.pool.name === "shields");
  if (asset) {
    _0xdb172b = asset.content.color;
  }
  ctx.fillStyle = _0xdb172b;
  ctx.shadowColor = _0xdb172b;
  ctx.shadowBlur = _0x42bf58 / 3;
  ctx.fillText(name, 0, _0x44a8ff);
  ctx.restore();
};
const _0x5d88d2 = () => {
  const path = new Path2D();
  const _0x488f86 = 5;
  path.moveTo(_0x488f86 * -3, _0x488f86 * -3);
  path.lineTo(_0x488f86 * -1, _0x488f86 * -1);
  path.lineTo(_0x488f86 * 0, _0x488f86 * -3);
  path.lineTo(_0x488f86 * 1, _0x488f86 * -1);
  path.lineTo(_0x488f86 * 3, _0x488f86 * -3);
  path.lineTo(_0x488f86 * 2, _0x488f86 * 1);
  path.lineTo(_0x488f86 * -2, _0x488f86 * 1);
  path.closePath();
  return path;
};
const _0x4f7610 = _0x5d88d2();
const _0x18b995 = (ctx, unit, scale, scaler) => {
  const {
    devicePixelRatio
  } = window;
  const _0xc0c8d6 = scaler * 24 / devicePixelRatio;
  ctx.save();
  ctx.translate(unit.position.x, unit.position.y);
  ctx.scale(1 / (scale * devicePixelRatio), 1 / (scale * devicePixelRatio));
  ctx.fillStyle = "#ffff00";
  ctx.strokeStyle = "#ff8800";
  ctx.lineJoin = "round";
  ctx.lineWidth = 1;
  ctx.translate(0, scale * -10 * devicePixelRatio);
  ctx.translate(0, -_0xc0c8d6 * devicePixelRatio);
  ctx.scale(scaler, scaler);
  ctx.translate(0, -4);
  ctx.translate(0, -12);
  ctx.fill(_0x4f7610);
  ctx.stroke(_0x4f7610);
  ctx.restore();
};
const _0x22b387 = () => {
  const path = new Path2D();
  const _0x325770 = 1.6;
  path.moveTo(_0x325770 * 0, _0x325770 * -7);
  path.lineTo(_0x325770 * 5, _0x325770 * -6);
  path.lineTo(_0x325770 * 7, _0x325770 * -3);
  path.lineTo(_0x325770 * 6, _0x325770 * 2);
  path.lineTo(_0x325770 * 4, _0x325770 * 3);
  path.lineTo(_0x325770 * 3, _0x325770 * 6);
  path.lineTo(_0x325770 * 0, _0x325770 * 7);
  path.lineTo(_0x325770 * -3, _0x325770 * 6);
  path.lineTo(_0x325770 * -4, _0x325770 * 3);
  path.lineTo(_0x325770 * -6, _0x325770 * 2);
  path.lineTo(_0x325770 * -7, _0x325770 * -3);
  path.lineTo(_0x325770 * -5, _0x325770 * -6);
  path.closePath();
  path.arc(_0x325770 * -3, _0x325770 * -1, _0x325770 * 2, 0, Math.PI * 2, true);
  path.closePath();
  path.arc(_0x325770 * 3, _0x325770 * -1, _0x325770 * 2, 0, Math.PI * 2, true);
  path.closePath();
  path.moveTo(_0x325770 * 0, _0x325770 * 1);
  path.lineTo(_0x325770 * -2, _0x325770 * 3);
  path.lineTo(_0x325770 * 0, _0x325770 * 4);
  path.lineTo(_0x325770 * 2, _0x325770 * 3);
  path.closePath();
  return path;
};
const _0x15282d = _0x22b387();
const _0xfa41f = (ctx, _0x101e7f, _0x11b8fa, scaler) => {
  ctx.save();
  ctx.fillStyle = "#ffffffcc";
  ctx.translate(_0x101e7f, _0x11b8fa);
  ctx.scale(scaler, scaler);
  ctx.fill(_0x15282d);
  ctx.restore();
};
const _0x36881f = (config, ctx, unit, display, layer) => {
  const {
    trackWidth
  } = config;
  if (layer.image) {
    const _0x17dacd = layer.image.naturalWidth || layer.image.width;
    const _0x38be58 = layer.image.naturalHeight || layer.image.height;
    const _0x249d7a = trackWidth * display.scale * layer.scale / _0x17dacd;
    ctx.save();
    ctx.translate(unit.position.x, unit.position.y - config.baseHeight * layer.level);
    ctx.rotate(unit.direction + Math.PI / 2);
    ctx.translate((display.x + layer.x) * trackWidth, (display.y + layer.y) * trackWidth);
    let rotation = 0;
    if (layer.direction === "target") {
      const delta = (unit.target || new Vec2(0, 0)).clone().sub(unit.position);
      const angle = Math.atan2(delta.y, delta.x);
      rotation += angle - unit.direction;
    }
    if (layer.direction === "billboard") {
      rotation += -unit.direction - Math.PI / 2;
    }
    if (layer.rotation) {
      rotation += layer.rotation * 0.0174533;
    }
    if (rotation) {
      ctx.rotate(rotation);
    }
    ctx.scale(_0x249d7a, _0x249d7a);
    ctx.translate(_0x17dacd * -layer.pivot.x, _0x38be58 * -layer.pivot.y);
    ctx.drawImage(layer.image, 0, 0);
    ctx.restore();
  }
};
const _0x108ce1 = (config, ctx, unit, container, _0x453a0b) => {
  const _0x18dfb8 = _0x453a0b ? container.frontLayers : container.backLayers;
  _0x18dfb8.forEach(item => _0x36881f(config, ctx, unit, item.display, item.layer));
};
const _0x2f37b9 = (ctx, _0x579e56, padding, barWidth, barHeight, _0x4e5701, strokeWidth) => {
  const [_0x41b7d4, _0x112984, _0x584a53, _0x1da05d] = _0x4e5701;
  ctx.beginPath();
  ctx.moveTo(_0x579e56 + _0x41b7d4, padding);
  ctx.lineTo(_0x579e56 + barWidth - _0x112984, padding);
  ctx.quadraticCurveTo(_0x579e56 + barWidth, padding, _0x579e56 + barWidth, padding + _0x112984);
  ctx.lineTo(_0x579e56 + barWidth, padding + barHeight - _0x584a53);
  ctx.quadraticCurveTo(_0x579e56 + barWidth, padding + barHeight, _0x579e56 + barWidth - _0x584a53, padding + barHeight);
  ctx.lineTo(_0x579e56 + _0x1da05d, padding + barHeight);
  ctx.quadraticCurveTo(_0x579e56, padding + barHeight, _0x579e56, padding + barHeight - _0x1da05d);
  ctx.lineTo(_0x579e56, padding + _0x41b7d4);
  ctx.quadraticCurveTo(_0x579e56, padding, _0x579e56 + _0x41b7d4, padding);
  ctx.closePath();
  ctx.fill();
  if (strokeWidth) {
    ctx.strokeStyle = "#00000099";
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
  }
};
const _0x4e3d37 = (ctx, path, _0xee4d43) => {
  ctx.fillStyle = _0xee4d43;
  ctx.fill(path);
};
const _0x461dbf = renderContext => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (boundsInView(unit.base.polygon, trackWidth) || game.debugView) {
      _0x4e3d37(ctx, unit.base.polygon.path, unit.skin.pattern && unit.skin.pattern.pattern || unit.skin.colors.main);
    }
  });
};
const _0x364800 = renderContext => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  ctx.save();
  ctx.lineCap = "round";
  ctx.globalCompositeOperation = "destination-out";
  game.units.forEach(unit => {
    const {
      start
    } = unit.track.polyline;
    if (start) {
      if (boundsInView(unit.track.polyline, trackWidth)) {
        _0x417956(ctx, unit.skin.colors.main, unit.track, unit.position, trackWidth);
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.clip(unit.base.polygon.path);
        _0x417956(ctx, unit.skin.pattern && unit.skin.pattern.pattern || unit.skin.colors.main, unit.track, unit.position, trackWidth + 2);
        ctx.restore();
      }
    }
  });
  ctx.restore();
};
const _0x3a6678 = renderContext => {
  const {
    game: game,
    ctx,
    pointInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (pointInView(unit.position, trackWidth * 4)) {
      _0x108ce1(game.config, ctx, unit, unit.skin.container, true);
    }
  });
};
const _0x3fbff0 = renderContext => {
  const {
    game: game,
    ctx,
    scale,
    scaler,
    pointInView
  } = renderContext;
  const {
    trackWidth,
    font
  } = game.config;
  game.units.forEach(unit => {
    if (pointInView(unit.position, trackWidth * 20) || game.debugView) {
      _0x3f43e3(ctx, unit, scale, scaler, font);
    }
  });
};
const _0x5aa343 = renderContext => {
  const {
    game: game,
    ctx,
    pointInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (pointInView(unit.position, trackWidth * 4)) {
      _0x108ce1(game.config, ctx, unit, unit.skin.container, false);
    }
  });
};
const _0x3a7043 = renderContext => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  ctx.save();
  ctx.lineCap = "round";
  ctx.globalAlpha = 0.6;
  game.units.forEach(unit => {
    if (unit.in !== unit.base) {
      if (boundsInView(unit.track.polyline, trackWidth)) {
        _0x417956(ctx, game.tailRecovered && unit == game.player ? "#f00" : unit.skin.colors.main, unit.track, unit.position, trackWidth);
      }
    }
  });
  ctx.restore();
};
const _0x159f57 = renderContext => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (boundsInView(unit.base.polygon, trackWidth)) {
      _0x4e3d37(ctx, unit.base.polygon.path, unit.skin.colors.back);
    }
  });
};
const _0x460dbb = renderContext => {
  const {
    game: game,
    ctx,
    viewScreenWidth,
    viewScreenHeight
  } = renderContext;
  const {
    baseHeight,
    arenaColor,
    borderColor,
    backgroundTopColor,
    backgroundBottomColor
  } = game.config;
  _0x4e3d37(ctx, game.border.polygon.path, arenaColor);
  ctx.translate(0, baseHeight * 3);
  _0x4e3d37(ctx, game.border.polygon.path, borderColor);
  ctx.translate(0, baseHeight * -3);
  ctx.fillStyle = _0x38959a(ctx, game.space, backgroundTopColor, backgroundBottomColor);
  ctx.fillRect(viewScreenWidth / -2, viewScreenHeight / -2, game.space.width + viewScreenWidth, game.space.height + viewScreenHeight);
};
const _0x2fee84 = renderContext => {
  const {
    game: game,
    ctx,
    pointInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  ctx.save();
  game.particles.forEach(particle => particle.time > 0 && pointInView(particle.position, trackWidth) && particle.draw(ctx));
  ctx.restore();
};
const _0x1ef210 = renderContext => {
  const {
    game: game,
    ctx,
    scale,
    scaler
  } = renderContext;
  const {
    font
  } = game.config;
  ctx.scale(1 / scale, 1 / scale);
  game.labels.forEach(label => label.draw(ctx, font, scale, scaler));
  ctx.scale(scale, scale);
};
const _0x4d8f75 = renderContext => {
  const {
    game: game,
    ctx,
    scale,
    scaler
  } = renderContext;
  const unit = game.units[0];
  if (unit) {
    _0x18b995(ctx, unit, scale, scaler);
  }
};
const _0x5b26c1 = renderContext => {
  const {
    game: game,
    ctx,
    scaler,
    calcMult,
    viewScreenWidth,
    viewScreenHeight,
    padding
  } = renderContext;
  const _0x2014d4 = viewScreenWidth / calcMult(8, 3);
  const _0x32d074 = game.space.width / _0x2014d4 * scaler * 3;
  ctx.save();
  ctx.translate(viewScreenWidth - padding - _0x2014d4, viewScreenHeight - padding - _0x2014d4);
  ctx.scale(_0x2014d4 / game.space.width, _0x2014d4 / game.space.height);
  _0x4e3d37(ctx, game.border.polygon.path, "#c2d6cdaa");
  _0x4e3d37(ctx, game.player.base.polygon.path, game.player.skin.colors.main);
  _0x421233(ctx, game.player.base.polygon.path, game.player.skin.colors.back, _0x32d074 / 2);
  _0x417956(ctx, game.player.skin.colors.back, game.player.track, game.player.position, _0x32d074 / 2);
  const back = game.units.some(unit => !game.isPlayer(unit) && unit.in === game.player.base) ? "#ff0000" : "#00000099";
  _0x421233(ctx, game.border.polygon.path, back, _0x32d074);
  ctx.beginPath();
  ctx.arc(game.player.position.x, game.player.position.y, _0x32d074, 0, Math.PI * 2);
  ctx.fillStyle = game.player.skin.colors.nick;
  ctx.fill();
  const asset = game.player.skin.assets.find(asset => asset.pool && asset.pool.name === "flags");
  const _0x65313c = asset && asset.content.roundedFlag;
  if (_0x65313c && game.player.cities) {
    game.player.cities.forEach(city => {
      ctx.save();
      ctx.translate(city.position.x, city.position.y);
      ctx.scale(2, 2);
      ctx.drawImage(_0x65313c, -_0x65313c.width / 2, -_0x65313c.height / 2);
      ctx.restore();
    });
  }
  ctx.restore();
};
let _0x279ed1;
window.addEventListener("resize", () => _0x279ed1 = null, false);
const _0x2d9dc4 = renderContext => {
  let {
    ctx,
    devicePixelRatio
  } = renderContext;
  if (!_0x279ed1) {
    _0x279ed1 = document.createElement("canvas");
    _0x279ed1.width = ~~renderContext.barWidth;
    _0x279ed1.height = ~~(renderContext.barHeight * 1.3 * 8);
  }
  if (renderContext.game.topListChanged) {
    renderContext.game.topListChanged = false;
    let ctx2 = _0x279ed1.getContext("2d");
    ctx2.save();
    ctx2.clearRect(0, 0, _0x279ed1.width, _0x279ed1.height);
    ctx2.translate(-ctx.canvas.width + _0x279ed1.width, 0);
    ctx2.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
    _0x383e3b(ctx2, renderContext);
    ctx2.restore();
  }
  ctx.save();
  ctx.resetTransform();
  ctx.drawImage(_0x279ed1, ctx.canvas.width - _0x279ed1.width, 0);
  ctx.restore();
};
const _0x383e3b = (ctx, renderContext) => {
  const {
    game: game,
    viewScreenWidth,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    barWidth,
    halfBarWidth,
    strokeWidth,
    uiFont
  } = renderContext;
  let _0x1d74ae;
  const _0x33d8e1 = (player, _0x5a6511, i, _0x315846) => {
    const padding2 = padding + i * (barHeight * 1.3);
    const _0x6268cd = player.schemes.scores();
    let _0xfb2cb = halfBarWidth * (_0x6268cd / _0x315846);
    if (_0x1d74ae && _0xfb2cb > _0x1d74ae - halfBarWidth * 0.05) {
      _0xfb2cb = _0x1d74ae - halfBarWidth * 0.05;
    }
    _0x1d74ae = _0xfb2cb;
    const _0x3e1956 = halfBarWidth + _0xfb2cb;
    let _0x230083 = viewScreenWidth - _0x3e1956;
    const _0x1d053a = [halfBarHeight, 0, 0, halfBarHeight];
    ctx.fillStyle = "#00000022";
    _0x2f37b9(ctx, _0x230083 + backHeight, padding2 + backHeight * 3, barWidth, barHeight, _0x1d053a);
    ctx.fillStyle = player.skin.colors.back;
    _0x2f37b9(ctx, _0x230083, padding2 + backHeight, barWidth, barHeight, _0x1d053a, strokeWidth);
    ctx.fillStyle = player.skin.colors.main;
    _0x2f37b9(ctx, _0x230083, padding2, barWidth, barHeight, _0x1d053a, strokeWidth);
    const asset = player.skin.assets.find(asset => asset.pool && asset.pool.name === "flags");
    const _0x419338 = asset && asset.content.roundedFlag;
    if (_0x419338) {
      const _0x35878d = barHeight * 0.8;
      const _0x3275bc = barHeight / 4;
      const _0x8b74bb = _0x35878d / _0x419338.height;
      ctx.save();
      ctx.translate(_0x230083 + _0x3275bc, padding2 + barHeight / 2);
      ctx.scale(_0x8b74bb, _0x8b74bb);
      ctx.drawImage(_0x419338, 0, -_0x419338.height / 2);
      ctx.restore();
      _0x230083 += _0x35878d;
    }
    ctx.fillStyle = player.skin.colors.plate;
    ctx.font = uiFont;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(_0x5a6511 + " – " + player.schemes.print() + " " + player.name, _0x230083 + halfBarHeight, padding2 + halfBarHeight * 1.1);
  };
  const unit = game.units[0];
  const _0x1a5fbd = unit && unit.schemes.scores();
  let _0xdb840e = false;
  for (let i = 0; i < 5; i++) {
    const unit = game.units[i];
    if (unit) {
      if (game.isPlayer(unit)) {
        _0xdb840e = true;
      }
      _0x33d8e1(unit, i + 1, i, _0x1a5fbd);
    }
  }
  if (!_0xdb840e && game.player && !game.player.death) {
    const index = game.units.findIndex(unit => game.isPlayer(unit));
    _0x33d8e1(game.player, index + 1, 6, _0x1a5fbd);
  }
};
const _0x4ff66b = renderContext => {
  const {
    game: game,
    ctx,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    barWidth,
    strokeWidth,
    uiFont
  } = renderContext;
  const {
    player
  } = game;
  ctx.fillStyle = "#00000022";
  _0x2f37b9(ctx, 0, padding, barWidth, barHeight + backHeight, [0, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, 0]);
  const _0x1fafd7 = game.best ? Math.min(1, player.schemes.scores() / game.best) : 1;
  const barWidth2 = barWidth * (0.25 + _0x1fafd7 * 0.75);
  ctx.fillStyle = player.skin.colors.back;
  _0x2f37b9(ctx, 0, padding + backHeight, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
  ctx.fillStyle = player.skin.colors.main;
  _0x2f37b9(ctx, 0, padding, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
  ctx.fillStyle = player.skin.colors.plate;
  ctx.font = uiFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(player.schemes.print(), halfBarHeight, padding + halfBarHeight * 1.1);
};
const _0x21111c = renderContext => {
  const {
    game: game,
    ctx,
    padding,
    backHeight,
    barHeight,
    uiFont
  } = renderContext;
  ctx.font = uiFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let _0x2dad2d = game.language.bestTxt + " " + game.player.schemes.print(game.best);
  ctx.fillStyle = "#00000066";
  ctx.fillText(_0x2dad2d, padding / 2, padding + barHeight + backHeight + padding / 2);
};
const _0x518738 = renderContext => {
  const {
    game: game,
    ctx,
    scaler,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    fontSize,
    uiFont
  } = renderContext;
  const padding2 = padding + barHeight + backHeight + fontSize + padding / 2 + 4;
  ctx.font = uiFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  let _0x5399bc = "x" + game.player.statistics.kills;
  ctx.fillStyle = "#00000088";
  _0x2f37b9(ctx, 0, padding2, barHeight * 1.5 + ctx.measureText(_0x5399bc).width, barHeight, [0, halfBarHeight, halfBarHeight, 0]);
  _0xfa41f(ctx, barHeight * 1.4 / 2, padding2 + barHeight / 2, scaler);
  ctx.fillStyle = "#ffffffcc";
  ctx.fillText(_0x5399bc, barHeight * 1.25, padding2 + halfBarHeight + barHeight * 0.03);
};
const _0x2ff3d1 = renderContext => {
  const {
    game: game,
    ctx,
    scaler,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    fontSize,
    uiFont,
    viewWidth,
    viewHeight,
    viewScreenWidth,
    viewScreenHeight
  } = renderContext;
  if (game.notifications.length) {
    const notification = game.notifications[0];
    if (notification.ready) {
      ctx.save();
      ctx.font = uiFont;
      const barHeight2 = fontSize * 2 + padding;
      const padding2 = notification.position() * (barHeight2 + padding) - barHeight2;
      const _0x4ed0dd = Math.max(ctx.measureText(notification.title).width, ctx.measureText(notification.description).width);
      const _0x38facc = fontSize * 2;
      const barWidth = _0x4ed0dd + padding * 5 + _0x38facc;
      const _0x475fa5 = padding / 2;
      ctx.fillStyle = "#00000088";
      _0x2f37b9(ctx, (viewScreenWidth - barWidth) / 2, padding2, barWidth, barHeight2, [(barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2]);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 1;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(notification.title, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + _0x38facc / 2, padding2 + _0x475fa5);
      ctx.fillStyle = "#ffffff88";
      ctx.shadowColor = "#ffffff88";
      ctx.shadowBlur = 1;
      ctx.font = uiFont;
      ctx.fillText(notification.description, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + _0x38facc / 2, padding2 + _0x475fa5 + fontSize);
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 10;
      if (notification.image) {
        ctx.drawImage(notification.image, (viewScreenWidth - barWidth) / 2 + _0x475fa5, padding2 + _0x475fa5, _0x38facc, _0x38facc);
      }
      ctx.restore();
    }
  }
};
export function renderGame(game) {
  const renderContext = game.getRenderContext();
  if (!renderContext) {
    return;
  }
  const {
    baseHeight
  } = game.config;
  let {
    ctx,
    devicePixelRatio,
    viewWidth,
    viewHeight,
    origin,
    scale
  } = renderContext;
  if (game.debugView) {
    scale = 0.5;
    origin = game.space.center;
  }
  ctx.resetTransform();
  ctx.clearRect(0, 0, viewWidth, viewHeight);
  const _0xb1eba7 = origin.x * scale - viewWidth / 2;
  const _0x52b2fa = origin.y * scale - viewHeight / 2;
  ctx.translate(-_0xb1eba7, -_0x52b2fa);
  ctx.scale(scale, scale);
  ctx.translate(0, -baseHeight);
  _0x461dbf(renderContext);
  _0x364800(renderContext);
  ctx.translate(0, baseHeight);
  ctx.globalCompositeOperation = "destination-over";
  _0x5aa343(renderContext);
  _0x3a7043(renderContext);
  _0x159f57(renderContext);
  _0x460dbb(renderContext);
  ctx.globalCompositeOperation = "source-over";
  _0x3a6678(renderContext);
  _0x3fbff0(renderContext);
  _0x2fee84(renderContext);
  _0x1ef210(renderContext);
  _0x4d8f75(renderContext);
  ctx.resetTransform();
  ctx.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
  if (game.player) {
    _0x2d9dc4(renderContext);
    _0x4ff66b(renderContext);
    _0x21111c(renderContext);
    _0x518738(renderContext);
    _0x5b26c1(renderContext);
    _0x2ff3d1(renderContext);
  }
  if (game.debug || game.recording || game.replaying) {
    renderDebugOverlay(game);
  }
}
