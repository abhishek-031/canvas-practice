let cursor = {
  x: 250,
  y: 250,
}

window.addEventListener("load", function() {
  const canvas = document.getElementById("tutorial");
  canvas.addEventListener("mousemove",(e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  })
  canvas.addEventListener("touchmove",(e) => {
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  })
});

window.requestAnimationFrame(draw)

const PI = Math.PI;

const map = "0123456789abcdef";

let particles = [];
for (i = 0; i < 80; i++) {
  particles[i] = { 
    strokeStyle: `#${map[random(16)]}${map[random(16)]}${map[random(16)]}${map[random(16)]}${map[random(16)]}${map[random(16)]}`,
    startAngle: Math.random()*6
  };
}

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const time = new Date();
    ctx.save();
    ctx.fillStyle = "rgba(0,0,0,0.02)";
    ctx.fillRect(0, 0, 500, 500);
    ctx.translate(cursor.x, cursor.y);
    ctx.rotate(PI*time.getSeconds()+PI*time.getMilliseconds()/1000)
    for (i = 0; i < 80; i++) {
      ctx.beginPath();
      ctx.strokeStyle = particles[i].strokeStyle;
      ctx.lineWidth = "4";
      const startAngle = particles[i].startAngle;
      ctx.arc(
        0,
        0,
        (i + 1) * 2,
        startAngle,
        startAngle + (PI / 8)
      );
      ctx.stroke();
      ctx.closePath();
    }
    ctx.restore();
  }
  window.requestAnimationFrame(draw)
}

function random(range, allowNegative = false) {
  return (
    (allowNegative && Math.random() > 0.5 ? -1 : 1) *
    Math.ceil(Math.random() * range)
  );
}
