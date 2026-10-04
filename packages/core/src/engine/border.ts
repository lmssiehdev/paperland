import { Polygon, circlePoints } from "./polygon";
import type { Vec2 } from "./vec2";
import type { Intersection, Segment } from "./segment";

/** Arena boundary: a polygon approximating a circle of `radius` around `center`. */
export class Border {
    polygon: Polygon;
    radius: number;
    center: Vec2;

  constructor(polygon: Polygon, center: Vec2, radius: number) {
    if (!(polygon instanceof Polygon)) {
      debugger;
    }
    this.polygon = polygon;
    this.radius = radius;
    this.center = center;
  }
  static circular(point: Vec2, borderPoints: number, baseRadius: number): Border {
    return new Border(new Polygon(circlePoints(point, borderPoints, baseRadius)), point, baseRadius);
  }
  intersections(segment: Segment): Intersection[] {
    {
      if (segment.start.distance2(this.center) < this.radius ** 2 * 0.95 && segment.end.distance2(this.center) < this.radius ** 2 * 0.95) {
        return [];
      }
    }
    return this.polygon.intersections(segment).filter(item => !item.overlay);
  }
}
