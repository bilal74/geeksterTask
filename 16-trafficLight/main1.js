const circles = document.querySelectorAll('.circle')
let i = 0;
setInterval(() => {
 changeLight();
}, 1000);
function changeLight() {
 circles[i].className = 'circle';
 i++;
 if(i > 2) {
  i = 0;
 }
 circles[i].classList.add(circles[i].getAttribute('color'));
}
