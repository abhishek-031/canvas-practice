window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillRect(20,20,110,110);
    ctx.save();
    ctx.rotate(0.1)


    ctx.fillStyle = "#f0f";
    ctx.fillRect(40,40,70,70);
    ctx.save();
    ctx.restore();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(60,60,30,30);


    ctx.restore();
    ctx.fillRect(70,70,10,10)

  
  }
}