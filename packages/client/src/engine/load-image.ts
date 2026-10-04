/** Resolves with the image once loaded (never rejects on error). */
export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>(resolve => {
    const img = document.createElement("img");
    img.src = url;
    img.onload = function () {
      resolve(img);
    };
  });
}
