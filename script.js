window.addEventListener("load", draw)

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000"
    ctx.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
    
    ctx.translate(20,-30)

    ctx.beginPath();
    ctx.moveTo(150,100);
    ctx.strokeStyle = "#39d01d";
    ctx.lineTo(150,450);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,100);
    ctx.lineTo(300,450);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50,200);
    ctx.lineTo(400,200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50,350);
    ctx.lineTo(400,350);
    ctx.closePath();
    ctx.stroke();
  }
}