window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // first border
    ctx.beginPath();
    ctx.moveTo(140, 15);
    ctx.lineTo(25, 15);
    ctx.quadraticCurveTo(10,15,10,30);
    ctx.lineTo(10, 120);
    //second border
    ctx.moveTo(140, 25);
    ctx.lineTo(30, 25);
    ctx.quadraticCurveTo(20,25,20,35);
    ctx.lineTo(20, 120);
    //rectangles
    roundedRectangle(50, 50, 40,25,ctx);
    roundedRectangle(50, 100, 40,15,ctx);
    roundedRectangle(120, 50, 40,25,ctx);
    roundedRectangle(120, 100, 40,55,ctx);
    ctx.closePath();
    ctx.stroke();
    //dots
    ctx.fillRect(60,36,5,5)
    ctx.fillRect(80,36,5,5)
    ctx.fillRect(100,36,5,5)
    ctx.fillRect(120,36,5,5)
    ctx.fillRect(140,36,5,5)
    ctx.fillRect(100,56,5,5)
    ctx.fillRect(100,76,5,5)
    ctx.fillRect(100,96,5,5)
    ctx.fillRect(100,116,5,5)
    ctx.fillRect(120,86,5,5)
    ctx.fillRect(140,86,5,5)
    ctx.fillRect(80,86,5,5)
    ctx.fillRect(60,86,5,5)
    ctx.fillRect(40,86,5,5)
    //faces
    //pac-man
    ctx.beginPath();
    ctx.arc(40,38, 10, 0.4,6)
    ctx.lineTo(37,38)
    ctx.fill();
    //killer
    ctx.beginPath();
    ctx.moveTo(30,100);
    ctx.lineTo(30,90);
    ctx.arc(40,90,10,Math.PI,2*Math.PI);
    ctx.lineTo(50,100);
    ctx.lineTo(45,95);
    ctx.lineTo(40,100);
    ctx.lineTo(35,95);
    ctx.lineTo(30,100);
    ctx.fill();
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.arc(35,88,3,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(42,88,3,0,2*Math.PI);
    ctx.fill();
  }
}

function roundedRectangle(x, y, width, height, ctx) {
  ctx.moveTo(x+5,y);
  ctx.lineTo(x+width-5, y);
  ctx.quadraticCurveTo(x+width,y,x+width,y+5);
  ctx.lineTo(x+width,y+height-5);
  ctx.quadraticCurveTo(x+width, y+height, x+width-5, y+height);
  ctx.lineTo(x+5, y+height);
  ctx.quadraticCurveTo(x,y+height,x,y+height-5);
  ctx.lineTo(x,y+5);
  ctx.quadraticCurveTo(x,y,x+5,y);
}