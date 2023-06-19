//jsdom canvas example
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

//draw something on the canvas with jsdom
const dom = new JSDOM(
  `<!DOCTYPE html><canvas id="canvas" width="400" height="400"></canvas>`
);
const canvas = dom.window.document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75);
console.log(dom.window.document.documentElement.outerHTML);
