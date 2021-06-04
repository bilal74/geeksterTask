var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
    if(mySong.paused){
        mySong.play();
        icon.src = "./media/pause.png";
    }
    else{
        mySong.pause();
        icon.src = "./media/play.png";
    }
}

// for space bar 
var play = false;
var myAudio = document.getElementById("mySong");
function onKeyDown(event) {
        switch (event.keyCode) {
            case 32: //SpaceBar     
            // console.log("SpaceBar");               
                if (play) {
                    myAudio.pause();
                    play = false;
                    // icon.src = "./media/pause.png";
                    icon.src = "./media/play.png";
                } else {
                    myAudio.play();
                    play = true;
                    icon.src = "./media/pause.png";
                    // icon.src = "./media/play.png";
                }
                break;
        }
  return false;
}
window.addEventListener("keydown", onKeyDown, false);













// function myFunction(event) {
//     var x = event.which || event.keyCode;
//     if(x == 32){
//         mySong.play();
//         icon.src = "./media/pause.png";
//     }
//     // document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
//   }
