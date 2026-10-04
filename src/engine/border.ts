import { Polygon, circlePoints } from "./polygon";
import type { Vec2 } from "./vec2";
import type { Segment } from "./segment";

export class Border {
    polygon: Polygon;
    radius: any;
    center: Vec2;

  constructor(polygon: Polygon, center: Vec2, radius: any) {
    if (!(polygon instanceof Polygon)) {
      debugger;
    }
    this.polygon = polygon;
    this.radius = radius;
    this.center = center;
  }
  static circular(point: Vec2, borderPoints: number, baseRadius: number) {
    return new Border(new Polygon(circlePoints(point, borderPoints, baseRadius)), point, baseRadius);
  }
  intersections(segment: Segment) {
    {
      if (segment.start.distance2(this.center) < this.radius ** 2 * 0.95 && segment.end.distance2(this.center) < this.radius ** 2 * 0.95) {
        return [];
      }
    }
    return this.polygon.intersections(segment).filter((item: { overlay: any; }): { overlay: any; } => !item.overlay);
  }
}
