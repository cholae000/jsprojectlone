//UI
const display = document.querySelector('.display');
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnReset = document.querySelector('.btn-reset');
let [hour,min,sec,milisec] = [0,0,0,0];
let int;

function startTimer(){
    milisec++;
    if(milisec ==1000){
        milisec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hour++;
            }
        }
    }

    const h = hour<10 ? '0'+hour : hour;
    const m = min<10 ? '0'+min : min;
    const s = sec<10 ? '0'+sec : sec;
    const ms = milisec < 10 ? '00'+milisec :
    milisec < 100 ? '0'+milisec : milisec;
    
    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    
}

//Event Listener
btnStart.addEventListener('click',function(){
    int = setInterval(startTimer,10);
});

btnPause.addEventListener('click',function(){
   clearInterval(int); 
});

btnReset.addEventListener('click',function(){
    clearInterval(int);
    display.innerHTML = '00 : 00 : 00 : 000';
});


