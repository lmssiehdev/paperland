export function loadImage(url: string) {
  return new Promise(resolve => {
    let img = document.createElement("img");
    img.src = url;
    img.onload = function () {
      resolve(img);
    };
  });
}
