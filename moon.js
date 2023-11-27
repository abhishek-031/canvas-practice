window.addEventListener("load", draw)

function draw() {
  window.requestAnimationFrame(animate)
}

function animate() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,250,250);
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,250,250);

    ctx.beginPath()
    ctx.arc(125,125,80,0,2*Math.PI);
    ctx.strokeStyle = "#21b4c4";
    ctx.lineWidth = "0.5"
    ctx.stroke();
    ctx.closePath();

    const date = new Date();

    const earthAngle = (2*Math.PI/60)*date.getSeconds() + (2*Math.PI/60000)*date.getMilliseconds();
    let earthX = 125 + 80*Math.cos(earthAngle);
    let earthY = 125 + 80*Math.sin(earthAngle);

    const moonAngle = (2*Math.PI/5)*date.getSeconds() + (2*Math.PI/5000)*date.getMilliseconds();
    let moonX = earthX + 25*Math.cos(moonAngle);
    let moonY = earthY + 25*Math.sin(moonAngle);

    drawSun(ctx, 125,125);
    drawMoon(ctx,moonX,moonY);
    drawEarth(ctx, earthX,earthY);

    // ctx.fillStyle = "rgba(0,0,0,0.3)";
    // ctx.rotate(moonAngle)
    // ctx.fillRect(earthX,earthY,20,40)

    window.requestAnimationFrame(animate);
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