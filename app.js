const childBlock = document.getElementById("child-block");
let x = 0;
let y = 0;
let xDirection = 1;
let yDirection = 1;
function moveChildBlock() {
    x += 5 * xDirection;
    y += 5 * yDirection;
    if (x >= 450) {
        xDirection = -1;
    } else if (x <= 0) {
        xDirection = 1;
    }
    if (y >= 450) {
        yDirection = -1;
    } else if (y <= 0) {
        yDirection = 1;
    }
    childBlock.style.left = `${x}px`;
    childBlock.style.top = `${y}px`;
    requestAnimationFrame(moveChildBlock);
}
requestAnimationFrame(moveChildBlock);



const counter = document.getElementById("counter");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
let count = 0;
let intervalId;
function startCounter() {
    intervalId = setInterval(() => {
        count++;
        counter.textContent = count;
    }, 1000);
}
function stopCounter() {
    clearInterval(intervalId);
}
startBtn.addEventListener("click", startCounter);
stopBtn.addEventListener("click", stopCounter);
