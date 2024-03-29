fetch("./node_modules/nice-color-palettes/100.json")
.then(response => response.json())
.then(palletes => {
  window.addEventListener("load", function(){draw(palletes)});
})


function draw(palettes) {
  const palette = palettes[Math.floor(Math.random()*100)]
  let height = 1000,
    width = 1000,
    margin = 0;
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, width, height);

    ctx.translate(margin, margin);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width - margin * 2, width - margin * 2);

    drawGrid(ctx, 40, 4, 5, width - 2 * margin, palette);
  }
}

function drawGrid(ctx, gridSize, circleRadius, lineWidth, canvasSize, palette) {
  let points = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      points.push([
        Math.floor(canvasSize * (gridSize > 1 ? i / (gridSize-1) : 0.5)),
        Math.floor(canvasSize * (gridSize > 1 ? j / (gridSize-1) : 0.5)),
        Math.floor(Math.random()*35),
        palette[Math.floor(Math.random()*(palette.length+1))]
      ]);
    }
  }

  points = points.filter(point => Math.random() < 0.5)

  points.forEach(([x, y, r, color]) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = lineWidth;
    ctx.fillStyle=color
    ctx.fill();
    ctx.closePath();
  });
}
