BASICs
```js
var canvas = new fabric.Canvas("c");
var rect = new fabric.Rect({
  left: 405,
  top: 540,
  fill: "red",
  width: 20,
  height: 20,
  angle: 45,
});
canvas.add(rect);
rect.set({ left: 20, top: 50 });
canvas.renderAll();
var circle = new fabric.Circle({
  radius: 20,
  fill: "green",
  left: 100,
  top: 100,
});
var triangle = new fabric.Triangle({
  width: 20,
  height: 30,
  fill: "blue",
  left: 50,
  top: 50,
});
canvas.add(circle);
canvas.add(triangle);
rect.set("fill", "red");
rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });
rect.set("angle", 15).set("flipY", true);
rect.set("angle", 45).set("flipX", true);
var rect1 = new fabric.Rect({
  width: 10,
  height: 20,
  fill: "#f55",
  opacity: 0.7,
});
// or functionally identical

var rect1 = new fabric.Rect();
rect1.set({ width: 10, height: 20, fill: "#f55", opacity: 0.7 });

rect.get("width"); // 0
rect.get("height"); // 0

rect.get("left"); // 0
rect.get("top"); // 0

rect.get("fill"); // rgb(0,0,0)
rect.get("stroke"); // null

rect.get("opacity"); // 1
fabric.Object.prototype.getAngleInRadians = function () {
  return (this.get("angle") / 180) * Math.PI;
};

var rect = new fabric.Rect({ angle: 45 });
rect.getAngleInRadians(); // 0.785...

var circle = new fabric.Circle({ angle: 30, radius: 10 });
circle.getAngleInRadians(); // 0.523...

circle instanceof fabric.Circle; // true
circle instanceof fabric.Object; // true

```

### Canvas
```js
var canvas = new fabric.Canvas("c");
var rect = new fabric.Rect({
  left: 405,
  top: 540,
  fill: "red",
  width: 20,
  height: 20,
  angle: 45,
});
canvas.add(rect);

// console.log(canvas.getObjects());
// console.log(canvas.item(0));
// canvas.remove(rect);
// console.log(canvas.getObjects());
// var canvas = new fabric.Canvas("c", {
//   backgroundColor: "rgb(100,100,200)",
//   selectionColor: "blue",
//   selectionLineWidth: 2,
//   // ...
// });

// canvas.selection = false; // disable group selection
// rect.set("selectable", false); // make object unselectable

// // Non Interactive canvas
// var staticCanvas = new fabric.StaticCanvas("c");

// staticCanvas.add(
//   new fabric.Rect({
//     width: 10,
//     height: 20,
//     left: 100,
//     top: 100,
//     fill: "yellow",
//     angle: 30,
//   })
// );
// var imgElement = document.getElementById("my-image");
// var imgInstance = new fabric.Image(imgElement, {
//   left: 100,
//   top: 100,
//   angle: 30,
//   opacity: 0.85,
// });
// canvas.add(imgInstance);

// fabric.Image.fromURL(
//   "https://images.unsplash.com/photo-1544097797-bf8fc095364c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//   function (oImg) {
//     oImg.scale(0.5).set("flipX", true);

//     canvas.add(oImg);
//   }
// );

var path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
path.set({ fill: "red", stroke: "green", opacity: 0.5 });
path.set({ left: 120, top: 120 });
canvas.add(path);

var path = new fabric.Path(
  "M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z"
);
path.set({ fill: "white", stroke: "green", opacity: 0.5 });

canvas.add(path.set({ left: 100, top: 200 }));

```