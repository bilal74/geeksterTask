document.body.style.backgroundColor="white";


const progessBar=()=>{
    const bar=document.querySelector(".bar");
    const text=document.querySelector(".text");
    var fr=setInterval(progress,100);
    var width=1;
    function progress(){
        if(width>=100){
            clearInterval(fr);
        }
        else{
            width+=1;
            bar.style.width=width+"%";
            text.innerText=width+"%";
        }
    }
    
}
const pbtn=document.getElementById("pbtn");

pbtn.addEventListener("click",progessBar);