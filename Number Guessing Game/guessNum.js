const min = 1;
const max = 100;
const range = max-min+1;
// Math.random() 0~1 
// Math.random()*10 Return a random number between 0 (inclusive) and 10 (exclusive):
// Math.random()*100 Return a random number between 0 (inclusive) and 100 (exclusive):
let result = Math.floor(Math.random()*range)+min;
console.log(result)
let guessTimes = 0; // 猜了幾次
let guess;
let running = true;
while(running){
    let guess = window.prompt(`guess a number between ${min} to ${max}`);
    guess = Number(guess);
    // isNaN() 判斷某數值是否為NaN
    if(isNaN(guess)){        
        guess = window.alert('enter number in here');
    }else if(guess<min || guess>max){
        guess = window.alert('please guess a number between ${min} to ${max}');
    }else{
        guessTimes++
        if(guess<result){
            window.alert("too low!")
        }else if(guess>result){
            window.alert('too high!')
        }else{
            window.alert(`correct! the answer is ${result} and you took ${guessTimes} attempts.`)
            running = false;
        }
    }    
}