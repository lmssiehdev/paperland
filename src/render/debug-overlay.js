import { _0xd09b08 } from "../engine/math.js";

export function renderDebugOverlay(game) {
  const {
    view
  } = game;
  if (!view) {
    return;
  }
  const {
    font
  } = game.config;
  const ctx = view.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#ffffff";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let _0x491973 = game.quality * 160;
  const _0x4dea04 = (_0x520648 = "", _0xc64be1 = 0) => {
    if (_0x520648) {
      ctx.strokeText(_0x520648, 10 + _0xc64be1 * 20, _0x491973);
      ctx.fillText(_0x520648, 10 + _0xc64be1 * 20, _0x491973);
    }
    _0x491973 += game.quality * 20;
  };
  _0x4dea04("Update time: " + game.stats.ut.toFixed(1));
  _0x4dea04("AI time: " + game.stats.ait.toFixed(1), 1);
  _0x4dea04("Spawn time: " + game.stats.st.toFixed(1), 1);
  _0x4dea04("Render time: " + game.stats.rt.toFixed(1));
  _0x4dea04("FPS: " + Math.round(game.stats.fps));
  _0x4dea04("Quality: " + game.quality);
  _0x4dea04();
  _0x4dea04("Units: " + game.units.length);
  _0x4dea04("Level: " + game.level.toFixed(3));
  _0x4dea04();
  _0x4dea04("Particles: " + game.particles.length);
  _0x4dea04();
  if (game.recording) {
    _0x4dea04("Recording: " + game.recording.duration().toFixed(1) + " s");
  }
  if (game.replaying) {
    _0x4dea04("Replaying: " + game.replaying.currentlyPlaying().toFixed(1) + "/" + game.replaying.duration().toFixed(1) + " s");
  }
  if (game.debugGraph) {
    const _0x1d8eca = view.width / 3;
    const _0x17818e = 100;
    const path = new Path2D();
    const path2 = new Path2D();
    const path3 = new Path2D();
    const path4 = new Path2D();
    path4.moveTo(0, 0);
    let _0x3c276f = 16.67;
    game.metrics.forEach(metric => {
      _0x3c276f = Math.max(_0x3c276f, metric.frameTime);
    });
    _0x3c276f *= 1.1;
    const _0x5baa4d = _0x1d8eca / (_0xd09b08 - 1);
    const _0x80f60e = _0x17818e / _0x3c276f;
    ctx.save();
    ctx.translate((view.width - _0x1d8eca) / 2, _0x17818e);
    ctx.fillStyle = "#00000033";
    ctx.fillRect(0, -_0x17818e, _0x1d8eca, _0x17818e);
    game.metrics.forEach((metric, index) => {
      path.lineTo(_0x5baa4d * index, -metric.updateTime * _0x80f60e);
      path2.lineTo(_0x5baa4d * index, -metric.renderTime * _0x80f60e);
      path4.lineTo(_0x5baa4d * index, -(metric.updateTime + metric.renderTime) * _0x80f60e);
      path3.lineTo(_0x5baa4d * index, -metric.frameTime * _0x80f60e);
    });
    path4.lineTo(_0x5baa4d * (game.metrics.length - 1), 0);
    ctx.lineWidth = 1;
    const _0x531fc7 = _0x80f60e * 16.67;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0, -_0x531fc7);
    ctx.lineTo(_0x1d8eca, -_0x531fc7);
    ctx.stroke();
    ctx.fillStyle = "#ffff00a0";
    ctx.fill(path4);
    ctx.strokeStyle = "#990099cc";
    ctx.stroke(path);
    ctx.strokeStyle = "#009900cc";
    ctx.stroke(path2);
    ctx.strokeStyle = "#0000ffcc";
    ctx.stroke(path3);
    ctx.lineWidth = 0.5;
    game.metrics.forEach((metric, index) => {
      const {
        returns,
        kills
      } = metric.events;
      if (returns || kills) {
        if (kills) {
          ctx.strokeStyle = "#99000040";
        } else {
          ctx.strokeStyle = "#00000040";
        }
        ctx.beginPath();
        ctx.moveTo(_0x5baa4d * index, 0);
        ctx.lineTo(_0x5baa4d * index, -_0x17818e);
        ctx.stroke();
      }
    });
    ctx.restore();
  }
}
