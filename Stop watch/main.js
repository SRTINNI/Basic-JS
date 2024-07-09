// main.js

let timer; // Variable to hold the interval timer
let hours = 0, minutes = 0, seconds = 0; // Variables to store time

// Function to start the stopwatch
function startStopwatch() {
    if (!timer) {
        timer = setInterval(incrementTimer, 1000); // Run incrementTimer every second (1000 ms)
        document.getElementById("startButton").disabled = true;
    }
}

// Function to increment the timer
function incrementTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

// Function to display the current time
function displayTime() {
    const display = document.getElementById("display");
    display.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

// Function to pad single digits with leading zeros
function pad(value) {
    return value < 10 ? "0" + value : value;
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(timer);
    timer = null;
    document.getElementById("startButton").disabled = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
    document.getElementById("startButton").disabled = false;
}

// Initial display of time
displayTime();
