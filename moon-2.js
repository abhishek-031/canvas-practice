window.addEventListener("load", draw)

function draw() {
  window.requestAnimationFrame(animate)
}

function animate() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,250,250);
    ctx.fillStyle = "rgba(0, 0, 0)";
    ctx.fillRect(0,0,250,250)
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.save();
    ctx.translate(125, 125);
    const time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds(),
    );  
    drawSun(ctx,0,0);
    ctx.translate(60,60);
    // ctx.fillStyle("rgba(0, 0, 0, 0.4)")
    ctx.fillRect(5,-10,40,20)
    drawEarth(ctx,0,0);
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
    )
    drawMoon(ctx,15,15);
    ctx.restore();
    window.requestAnimationFrame(animate)
  }
}

function drawSun(ctx,x,y) {
  ctx.moveTo(x,y);
  ctx.beginPath();
  const grad = ctx.createRadialGradient(x,y,20,x,y,40);
  grad.addColorStop(0,"rgba(236, 237, 175,0.4)");
  grad.addColorStop(1,"rgba(236, 237, 175,0)");
  ctx.fillStyle=grad;
  ctx.arc(x,y,40,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x,y,15,0,2*Math.PI);
  ctx.fillStyle="#f3f582";
  ctx.fill();
  ctx.closePath();
}

function drawMoon(ctx,x,y) {
  ctx.moveTo(x,y);
  ctx.beginPath();
  ctx.arc(x,y,5,0,2*Math.PI);
  ctx.fillStyle = "#e3e3de";
  ctx.fill();
  ctx.closePath();
}

function drawEarth(ctx, x, y) {
  ctx.moveTo(x,y);
  ctx.beginPath();
  ctx.arc(x,y,10,0,2*Math.PI);
  ctx.fillStyle="#21b4c4";
  ctx.fill();
  ctx.closePath();
}