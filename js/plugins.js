// follow cursor
var el = document.getElementById("follow-cursor"),
  elWidth = el.offsetWidth,
  elHeight = el.offsetHeight,
  width = window.innerWidth,
  height = window.innerHeight,
  target = {
    x: width / 2,
    y: height / 2
  },
  position = {
    x: height,
    y: width
  },
  ease = 0.075;

window.addEventListener("mousemove", function (event) {
  target.x = event.clientX;
  target.y = event.clientY;
});

function update() {
  var dx = target.x - position.x,
    dy = target.y - position.y,
    vx = dx * ease,
    vy = dy * ease;

  position.x += vx;
  position.y += vy;

  el.style.left = (position.x - elWidth / 2).toFixed() + "px";
  el.style.top = (position.y - elHeight / 2).toFixed() + "px";

  requestAnimationFrame(update);
}

update();


// Progress Bar

const progressBar = document.querySelector("#progress");
window.addEventListener('scroll', progressCalc);
function progressCalc(e){
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let progress = windowScroll / windowHeight * 100;
	progressBar.style.width = progress + "%";
}