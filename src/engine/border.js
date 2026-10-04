import { Polygon, circlePoints } from "./polygon.js";

export class Border {
  constructor(polygon, center, radius) {
    if (!(polygon instanceof Polygon)) {
      debugger;
    }
    this.polygon = polygon;
    this.radius = radius;
    this.center = center;
  }
  static circular(point, borderPoints, baseRadius) {
    return new Border(new Polygon(circlePoints(point, borderPoints, baseRadius)), point, baseRadius);
  }
  intersections(segment) {
    {
      if (segment.start.distance2(this.center) < this.radius ** 2 * 0.95 && segment.end.distance2(this.center) < this.radius ** 2 * 0.95) {
        return [];
      }
    }
    return this.polygon.intersections(segment).filter(item => !item.overlay);
  }
}
