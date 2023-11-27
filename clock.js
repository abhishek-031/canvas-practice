// window.addEventListener("load", draw)
window.requestAnimationFrame(draw)
const PI = Math.PI;

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,250,250)
    ctx.save()
    ctx.translate(125,125);
    ctx.beginPath();
    ctx.arc(0,0,60,0,2*PI);
    ctx.strokeStyle = "#157ac2";
    ctx.lineWidth = "6";
    ctx.stroke();
    ctx.save()
    for(let i=0;i<60;i++) {
      ctx.beginPath();
      if(i%5 === 0) {
        ctx.fillRect(-1,-50,2,12);
      } else {
        ctx.fillRect(-1,-50,2,4);
      }
      ctx.rotate(PI/30);
    }
    ctx.restore();
    const time = new Date();
    const hr = time.getHours()%12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    ctx.save();
    ctx.beginPath();
    ctx.rotate(hr*(PI/6) + minutes*(PI/360)+seconds*(PI/21600));
    ctx.fillRect(-2,4,4,-30);

    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.rotate(minutes*(PI/30)+seconds*(PI/1800));
    ctx.fillRect(-1,8,2,-50);

    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.rotate(seconds*(PI/30));
    ctx.fillStyle = "#c22715"
    ctx.fillRect(-1,6,2,-40);
    ctx.restore();
    ctx.restore();
    window.requestAnimationFrame(draw)
  }
}