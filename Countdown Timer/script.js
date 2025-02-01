let timer;
let isRunning = false;
let remainingTime = 0;

document.getElementById("start").addEventListener("click", function () {
    if (!isRunning) {
        let minutes = parseInt(document.getElementById("minutes").value) || 0;
        let seconds = parseInt(document.getElementById("seconds").value) || 0;
        remainingTime = minutes * 60 + seconds;
        startCountdown();
    }
});

document.getElementById("pause").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("display").textContent = "00:00";
});

function startCountdown() {
    isRunning = true;
    timer = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timer);
            document.getElementById("display").textContent = "Time's Up!";
            return;
        }
        remainingTime--;
        let mins = Math.floor(remainingTime / 60);
        let secs = remainingTime % 60;
        document.getElementById("display").textContent = 
            (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
    }, 1000);
}
