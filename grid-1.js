window.addEventListener("load", draw);

function draw() {
  let height = 1000,
    width = 1000,
    margin = 100;
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, width, height);

    ctx.translate(margin, margin);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width - margin * 2, width - margin * 2);

    drawGrid(ctx, 70, 4, 5, width - 2 * margin);
  }
}

function drawGrid(ctx, gridSize, circleRadius, lineWidth, canvasSize) {
  let points = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      points.push([
        Math.floor(canvasSize * (gridSize > 1 ? i / (gridSize-1) : 0.5)),
        Math.floor(canvasSize * (gridSize > 1 ? j / (gridSize-1) : 0.5)),
      ]);
    }
  }

  points = points.filter(point => Math.random() < 0.6)

  points.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = lineWidth;
    ctx.fillStyle="black"
    ctx.fill();
    ctx.closePath();
  });
}
