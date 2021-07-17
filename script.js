window.onload = function(){ 
var seconds = 00;
var tens = 00;
var secondsText = document.getElementById('seconds');
var tensText = document.getElementById('tens');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var resetButton = document.getElementById('resetButton');
var interval;

function startTimer(){

    tens++;

    if(tens<9){
        tensText.innerHTML = '0' + tens;
    }

    if(tens>9){
        tensText.innerHTML = tens;
    }

    if (tens>99){
        seconds++;
        secondsText.innerHTML = "0" + seconds;
        tens = 0;
        tensText.innerHTML = "0" + 0;
    }
    if(seconds>9){
        secondsText.innerHTML = seconds;
    }
}

startButton.onclick = function(){
    interval = setInterval(startTimer);
}

stopButton.onclick = function(){
    clearInterval(interval);
}

resetButton.onclick = function(){
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    tensText.innerHTML = tens;
    secondsText.innerHTML = seconds;
}
};