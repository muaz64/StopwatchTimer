const minLabel = document.getElementById('minutes');
const secLabel = document.getElementById('seconds');
const milisecLabel = document.getElementById('miliseconds');

const startButton = document. getElementById('startBtn');
const stopButton = document. getElementById('stopBtn');
const pauseButton = document. getElementById('pauseBtn');
const resetButton = document. getElementById('resetBtn');

const lapList = document.getElementById('laplist');

///stopwatch variables

 let minutes = 0;
 let seconds = 0;
 let miliseconds = 0;
 let interval;

 startButton.addEventListener('click', starttimer);
 stopButton.addEventListener('click', stoptimer);
 pauseButton.addEventListener('click',pausetimer);
 resetButton.addEventListener('click',resettimer);


 function starttimer(){
    interval= setInterval(updateTimer,10);
    startButton.disabled =true;
 }
 function stoptimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;

 }

 function pausetimer(){
    clearInterval(interval);
    startButton.disabled = false;
 }
 function resettimer(){
    clearInterval(interval);
    resetTimerData();
    resetLapTimer(); 
    startButton.disabled = false;

 }
function updateTimer(){
    miliseconds++;
    if(miliseconds === 100){
        miliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer(){
    milisecLabel.textContent = padTime(miliseconds);
    secLabel.textContent = padTime(seconds);
    minLabel.textContent = padTime(minutes);
}
function padTime(time){
    return time.toString().padStart(2,'0');
}

function resetTimerData(){
    minutes = 0;
    seconds = 0;
    miliseconds =0;
    displayTimer();

}
function addToLapList(){
    const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(miliseconds)}`;

    const listItem =document.createElement('li');

    listItem.innerHTML =`<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
    
}
function resetLapTimer() {
    lapList.innerHTML = ''; 
}