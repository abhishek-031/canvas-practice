window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for(let i=0; i<6;i++) {
      for(let j=0;j<6;j++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgb(${255 - j*40},${255 -i*40}, 0)`;
        ctx.arc(10+j*25, 10+i*25, 10, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
}