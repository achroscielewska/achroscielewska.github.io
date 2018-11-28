let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    //clear any existing timers
    clearInterval(countdown);

   const now = Date.now();
   const then = now + seconds * 1000;
   displayTimeLeft(seconds);

   countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it

    if(secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }
    
    displayTimeLeft(secondsLeft);
    dispalyEndTime(then);

   }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timeDisplay.textContent = display;
}

function dispalyEndTime(timestamp) {
    const end = new Date(timestamp);

    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`

    console.log(end)
}

function startTimer() {
    console.log(parseInt(this.dataset.time))
    const seconds = parseInt(this.dataset.time);

    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit',
function(e) {
    e.preventDefault();
    const mins = this.minutes.value;

    timer(mins * 60);
    this.reset();
})