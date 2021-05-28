let btn = document.getElementById('btn');
let output = document.getElementById('outPutText');

let number = [Math.floor(Math.random() * 100)];
// console.log(number);

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;

    if(input == number){
        output.innerHTML = `Your guess is right, the number was ${number}`;
        alert('Congrats you won the game');
    }
    else if(input < number){
        output.innerHTML = "Your guess is too low";
    }
    else{
        output.innerHTML = "Your guess is too high";
    }
});

