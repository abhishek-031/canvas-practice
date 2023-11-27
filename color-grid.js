window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for(let i=0; i<6;i++) {
      for(let j=0;j<6;j++) {
        ctx.fillStyle = `rgb(${255 - j*40},${255 -i*40}, 0)`;
        ctx.fillRect(10+j*20,10+i*20, 20, 20);
        ctx.fill();
      }
    }
  }
}