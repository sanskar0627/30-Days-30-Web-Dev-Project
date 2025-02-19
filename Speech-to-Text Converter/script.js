const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const output = document.getElementById("output");
const copyTextBtn = document.getElementById("copyText");

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});

recognition.onresult = (event) => {
    let transcript = "";
    for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
    }
    output.innerText = transcript;
};

// Copy to clipboard
copyTextBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText);
    alert("Copied to clipboard!");
});
