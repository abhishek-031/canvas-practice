window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.rect(0,0,150,150);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(75,75,60,0,2*Math.PI);
    ctx.clip();
    const lingrad = ctx.createLinearGradient(0,150,150,0);
    lingrad.addColorStop(0,"#00f")
    lingrad.addColorStop(1,"#006")
    ctx.fillStyle = lingrad;
    ctx.fillRect(0,0,150,150);
    for(let i=1;i<30;i++) {
      drawStar(ctx, 75-random(50),75-random(50), random(2, false)+2);
    }
  }
}

function random(range, allowNegative = true) {
  return (allowNegative && Math.random() > 0.5 ? -1 : 1)*Math.ceil(Math.random()*range);
}

function drawStar(ctx, x,y, size) {
  ctx.beginPath();
  ctx.fillStyle = "#FFF"
  ctx.moveTo(x,y);
  ctx.lineTo(x-size,y-size+size/3);
  ctx.lineTo(x,y-size+size/3);
  ctx.lineTo(x+size/4,y-size-size/2);
  ctx.lineTo(x+size/2,y-size/1.6);
  ctx.lineTo(x+size+size/2,y-size+size/2);
  ctx.lineTo(x+size/2,y-size/5);
  ctx.lineTo(x+size+size/2,y+size+size/5);
  ctx.lineTo(x+size/3,y+size/5);
  ctx.lineTo(x-size+size/3,y+size+size/5);
  ctx.lineTo(x-size/10,y-size/10)
  ctx.closePath();
  ctx.fill();
}