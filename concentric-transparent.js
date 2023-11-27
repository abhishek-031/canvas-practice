window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle="#FFDF00";
    ctx.fillRect(10,10,60,60);
    ctx.fillStyle="#22EE22";
    ctx.fillRect(70,10,60,60);
    ctx.fillStyle="#2222BB";
    ctx.fillRect(10,70,60,60);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(70,70,60,60)
    for(i=0;i<10;i++) {
      ctx.beginPath();
      ctx.fillStyle="rgba(255,255,255,0.1)";
      ctx.arc(70,70,10+i*7,0,2*Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }
}