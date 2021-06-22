// singleton windows, we want just one instance
export const gameWindow = {
  canvas: document.createElement("canvas"),
  context: undefined,

  draw: function (width = 600, height = 600) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.background = "#222";
    this.context = this.canvas.getContext("2d");
    document.body.insertAdjacentElement("beforebegin", this.canvas);
    //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
};

export interface typeOf_gameWindow {
  canvas: HTMLCanvasElement;
  context: object;
  draw: Function;
}