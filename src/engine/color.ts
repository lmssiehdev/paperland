export interface RGB {
  r: number;
  g: number;
  b: number;
}

/** Hue in degrees [0, 360], saturation and value in percent [0, 100]. */
export interface HSV {
  h: number;
  s: number;
  v: number;
}

export const hexToRgb = (item: string): RGB => {
  const red = parseInt(item.substring(1, 3), 16);
  const green = parseInt(item.substring(3, 5), 16);
  const blue = parseInt(item.substring(5, 7), 16);
  return {
    r: red,
    g: green,
    b: blue
  };
};
export const rgbToHsv = ({
  r,
  g,
  b
}: RGB): HSV => {
  let rNorm;
  let gNorm;
  let bNorm;
  let rDiff;
  let gDiff;
  let bDiff;
  // One of the three branches below always assigns: `max` is one of rNorm/gNorm/bNorm.
  let hue!: number;
  let saturation;
  let max;
  let delta;
  let channelDiff;
  let round2;
  rNorm = r / 255;
  gNorm = g / 255;
  bNorm = b / 255;
  max = Math.max(rNorm, gNorm, bNorm);
  delta = max - Math.min(rNorm, gNorm, bNorm);
  channelDiff = (channel: number): number => (max - channel) / 6 / delta + 1 / 2;
  round2 = (value: number): number => Math.round(value * 100) / 100;
  if (delta == 0) {
    hue = saturation = 0;
  } else {
    saturation = delta / max;
    rDiff = channelDiff(rNorm);
    gDiff = channelDiff(gNorm);
    bDiff = channelDiff(bNorm);
    if (rNorm === max) {
      hue = bDiff - gDiff;
    } else if (gNorm === max) {
      hue = 1 / 3 + rDiff - bDiff;
    } else if (bNorm === max) {
      hue = 2 / 3 + gDiff - rDiff;
    }
    if (hue < 0) {
      hue += 1;
    } else if (hue > 1) {
      hue -= 1;
    }
  }
  return {
    h: Math.round(hue * 360),
    s: round2(saturation * 100),
    v: round2(max * 100)
  };
};
const rgbToHex = ({
  r,
  g,
  b
}: RGB): string => {
  const toHexByte = (byte: number): string => {
    const result = byte.toString(16);
    if (result.length < 2) {
      return "0" + result;
    } else {
      return result;
    }
  };
  return "#" + toHexByte(r) + toHexByte(g) + toHexByte(b);
};
const hsvToRgb = ({
  h,
  s,
  v
}: HSV): RGB => {
  var red;
  var green;
  var blue;
  var sector;
  var fraction;
  var p;
  var q;
  var t;
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s));
  v = Math.max(0, Math.min(100, v));
  s /= 100;
  v /= 100;
  if (s == 0) {
    red = green = blue = v;
    return {
      r: Math.round(red * 255),
      g: Math.round(green * 255),
      b: Math.round(blue * 255)
    };
  }
  h /= 60;
  sector = Math.floor(h);
  fraction = h - sector;
  p = v * (1 - s);
  q = v * (1 - s * fraction);
  t = v * (1 - s * (1 - fraction));
  switch (sector) {
    case 0:
      red = v;
      green = t;
      blue = p;
      break;
    case 1:
      red = q;
      green = v;
      blue = p;
      break;
    case 2:
      red = p;
      green = v;
      blue = t;
      break;
    case 3:
      red = p;
      green = q;
      blue = v;
      break;
    case 4:
      red = t;
      green = p;
      blue = v;
      break;
    default:
      red = v;
      green = p;
      blue = q;
  }
  return {
    r: Math.round(red * 255),
    g: Math.round(green * 255),
    b: Math.round(blue * 255)
  };
};
export const hsvToHex = (hsv: HSV): string => rgbToHex(hsvToRgb(hsv));
export function hsvMulValue(hsv: HSV, factor: number): HSV {
  let {
    h,
    s,
    v
  } = hsv;
  v *= factor;
  return {
    h: h,
    s: s,
    v: v
  };
}
export function hsvLighten(hsv: HSV, amount: number): HSV {
  let {
    h,
    s,
    v
  } = hsv;
  const headroom = 100 - v;
  v = Math.max(v * amount, v + amount * headroom / 4);
  return {
    h: h,
    s: s,
    v: v
  };
}
export function hsvSetValue(hsv: HSV, value: number): HSV {
  let {
    h,
    s,
    v
  } = hsv;
  v = value;
  return {
    h: h,
    s: s,
    v: v
  };
}
