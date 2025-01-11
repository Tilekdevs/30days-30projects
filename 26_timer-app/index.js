let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let stopWatch = null;

function timer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function timerStart() {
    if (stopWatch != null) {
        clearInterval(stopWatch);
    }
    stopWatch = setInterval(timer, 1000);
}

function timerStop() {
    if (stopWatch != null) {
        clearInterval(stopWatch);
        stopWatch = null;
    }
}

function timerRestart() {
    timerStop();
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}
