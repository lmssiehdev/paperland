import { METRICS_HISTORY_LENGTH } from "../engine/math";
import type { Game } from "../game/game";

export function renderDebugOverlay(game: Game) {
  const {
    view
  } = game;
  if (!view) {
    return;
  }
  const {
    font
  } = game.config;
  // The game view is a 2d canvas.
  const ctx = view.getContext("2d")!;
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#ffffff";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let lineY = game.quality * 160;
  const printLine = (text = "", indent = 0) => {
    if (text) {
      ctx.strokeText(text, 10 + indent * 20, lineY);
      ctx.fillText(text, 10 + indent * 20, lineY);
    }
    lineY += game.quality * 20;
  };
  printLine("Update time: " + game.stats.ut.toFixed(1));
  printLine("AI time: " + game.stats.ait.toFixed(1), 1);
  printLine("Spawn time: " + game.stats.st.toFixed(1), 1);
  printLine("Render time: " + game.stats.rt.toFixed(1));
  printLine("FPS: " + Math.round(game.stats.fps));
  printLine("Quality: " + game.quality);
  printLine();
  printLine("Units: " + game.units.length);
  printLine("Level: " + game.level.toFixed(3));
  printLine();
  printLine("Particles: " + game.particles.length);
  printLine();
  if (game.recording) {
    printLine("Recording: " + game.recording.duration().toFixed(1) + " s");
  }
  if (game.replaying) {
    printLine("Replaying: " + game.replaying.currentlyPlaying().toFixed(1) + "/" + game.replaying.duration().toFixed(1) + " s");
  }
  if (game.debugGraph) {
    const graphWidth = view.width / 3;
    const graphHeight = 100;
    const path = new Path2D();
    const path2 = new Path2D();
    const path3 = new Path2D();
    const path4 = new Path2D();
    path4.moveTo(0, 0);
    let maxFrameTime = 16.67;
    game.metrics.forEach(metric => {
      maxFrameTime = Math.max(maxFrameTime, metric.frameTime);
    });
    maxFrameTime *= 1.1;
    const stepX = graphWidth / (METRICS_HISTORY_LENGTH - 1);
    const scaleY = graphHeight / maxFrameTime;
    ctx.save();
    ctx.translate((view.width - graphWidth) / 2, graphHeight);
    ctx.fillStyle = "#00000033";
    ctx.fillRect(0, -graphHeight, graphWidth, graphHeight);
    game.metrics.forEach((metric, index) => {
      path.lineTo(stepX * index, -metric.updateTime * scaleY);
      path2.lineTo(stepX * index, -metric.renderTime * scaleY);
      path4.lineTo(stepX * index, -(metric.updateTime + metric.renderTime) * scaleY);
      path3.lineTo(stepX * index, -metric.frameTime * scaleY);
    });
    path4.lineTo(stepX * (game.metrics.length - 1), 0);
    ctx.lineWidth = 1;
    const targetFrameY = scaleY * 16.67;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0, -targetFrameY);
    ctx.lineTo(graphWidth, -targetFrameY);
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
        ctx.moveTo(stepX * index, 0);
        ctx.lineTo(stepX * index, -graphHeight);
        ctx.stroke();
      }
    });
    ctx.restore();
  }
}
