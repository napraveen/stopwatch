var tens =00;
var sec =00;    
var appendtens = document.getElementById("tens");
var appendsec = document.getElementById("sec");
var started = document.getElementById("start");
var stopped = document.getElementById("stop");
var reseted = document.getElementById("reset");
var interval;
function startTimer(){
    tens++;

    if (tens<9){
        appendtens.innerHTML="0"+tens;
    }
    if (tens>9){
        appendtens.innerHTML=tens;
    }
    if(tens>99){
        sec++;
        appendsec.innerHTML= "0"+sec;
        tens=0;
        appendtens.innerHTML= "0"+0;

    }
    if (sec>9){
        appendsec.innerHTML = sec;
    }

}

started.onclick = function(){
    interval = setInterval(startTimer);
};
stopped.onclick = function(){
    
    interval = clearInterval(interval);
};
reseted.onclick = function(){
    clearInterval(interval);
    tens="00";
    sec="00";
    appendsec.innerHTML=sec;
    appendtens.innerHTML=tens;
};
