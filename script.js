let seconds = 0;
let tens = 0;
let minutes = 0;

let getMinutes = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

let interval;

btnStart.addEventListener('click', ()=>{
    interval = setInterval(startTimer, 100);
});
btnStop.addEventListener('click', ()=>{
    clearInterval(interval);
});

btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';

    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
});

function startTimer(){
    tens++;

    if(tens<=9){
        getTens.innerHTML = '0' + tens;
    }
    else if(tens > 9){
        seconds++;

        if(seconds>=10){
            getSeconds.innerHTML = seconds;
        }else{
            getSeconds.innerHTML = '0' + seconds;
        }
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }

    if(seconds>59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
}