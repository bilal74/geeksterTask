var circle = document.getElementById('circle') ;
var upBtn = document.getElementById('upBtn') ;
var downBtn = document.getElementById('downBtn') ;
var img11 = document.getElementById('bil11');

var rotateValue = circle.style.transform ; 
var rotateSum ;
upBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum ;
    rotateValue = rotateSum ;
}
downBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum ;
    rotateValue = rotateSum ;
}

// for up arrow 

// arrow left	37
// arrow up	38
// arrow right	39
// arrow down	40
var play = true;
function onKeyDown(event) {
        switch (event.keyCode) {
            case 37 : //SpaceBar    
            console.log("37");             
                if (play) {
                    rotateSum = rotateValue + "rotate(-90deg)";
                    circle.style.transform = rotateSum ;
                    rotateValue = rotateSum ;
                    img11.src = "./images/dg1.jpg";
                }
                break;
        }
  return false;
}
window.addEventListener("keydown", onKeyDown, false);

























// // for space bar 
// var play = false;
// var myAudio = document.getElementById("mySong");
// function onKeyDown(event) {
//         switch (event.keyCode) {
//             case 32: //SpaceBar     
//             // console.log("SpaceBar");               
//                 if (play) {
//                     myAudio.pause();
//                     play = false;
//                     // icon.src = "./media/pause.png";
//                     icon.src = "./media/play.png";
//                 } else {
//                     myAudio.play();
//                     play = true;
//                     icon.src = "./media/pause.png";
//                     // icon.src = "./media/play.png";
//                 }
//                 break;
//         }
//   return false;
// }
// window.addEventListener("keydown", onKeyDown, false);

