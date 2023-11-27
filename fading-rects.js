window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle="#fe0";
    ctx.fillRect(10,10,130,30);
    ctx.fillStyle="#0e0";
    ctx.fillRect(10,40,130,30);
    ctx.fillStyle="#08f";
    ctx.fillRect(10,70,130,30);
    ctx.fillStyle="#e00";
    ctx.fillRect(10,100,130,30);
    for(let j=0;j<4;j++) {
      for(let i=0;i<10;i++) {
        ctx.fillStyle="rgba(255,255,255,0.2)";
        ctx.fillRect(20+i*13,15+j*30,130-(i+1)*13,20);
      }
    }
  }
}