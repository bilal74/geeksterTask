function jokePrint() {
    fetch('https://api.chucknorris.io/jokes/random').then(response => {
        return response.json();
    }).then((data) => {
        var joke = data.value;
        let result=document.getElementById("content");
        result.innerHTML=joke;
    })
}
jokePrint();
const btnclick=document.getElementById("btn");
btnclick.addEventListener("click",jokePrint);