// Get the display and control elements
const display = document.querySelector('.display');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

// Initialize variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId = null;
let isRunning = false;

// Update the display
function updateDisplay() {
    const hoursString = String(hours).padStart(2, '0');
    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');
    const millisecondsString = String(milliseconds).padStart(2, '0');
    display.textContent = `${hoursString}:${minutesString}:${secondsString}:${millisecondsString}`;
}

// Start/Stop the stopwatch
function startStop() {
    if (!isRunning) {
        intervalId = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10); // 10ms for 100ms accuracy
        isRunning = true;
        startButton.textContent = 'Stop';
    } else {
        clearInterval(intervalId);
        isRunning = false;
        startButton.textContent = 'Start';
    }
}

// Reset the stopwatch
function reset() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    isRunning = false;
    startButton.textContent = 'Start';
}

// Event listeners
startButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

// Initial display update
updateDisplay();