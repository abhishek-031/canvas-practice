// window.addEventListener("load", draw)

window.requestAnimationFrame(draw);

let x=40,y=40;
let vx=5, vy=2;

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    if(vx+x > 500 || vx+x < 0) {
      vx = -vx
    }
    if(vy+y > 500 || vy+y < 0) {
      vy = -vy;
    }
    x=x+vx;
    y=y+vy;
    ctx.arc(x,y,30,0,2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#2763cc";
    ctx.fill();

    window.requestAnimationFrame(draw)
  }
}