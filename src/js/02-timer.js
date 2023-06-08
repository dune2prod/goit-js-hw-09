import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const daysOutput = document.querySelector('[data-days]');
const hoursOutput = document.querySelector('[data-hours]');
const minutesOutput = document.querySelector('[data-minutes]');
const secondsOutput = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
return value.toString().padStart(2, "0")
};


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerStart(selectedDates[0]);
    // targetDate = selectedDates[0]
    // console.dir(selectedDates[0]);
    
  
  },
};
const calendar = flatpickr("#datetime-picker", options);
// console.log(calendar);

// const a = document.querySelector('input[type="text"]');
// const a = document.querySelector('#datetime-picker');

//  let targetDate = new Date('06,09,2023');
// const targetDate = 0;
// console.log(targetDate);
// timerStart();
  
function timerStart(targetDate) {

  startBtn.addEventListener('click', () => {
    const intervalId = setInterval(() => {
      // console.log(value);
 
 
  const currentDate = Date.now();
      const timeLeft = convertMs(targetDate - currentDate);
      const msLeft = targetDate - currentDate;
      console.log(timeLeft);
      if (msLeft <= 0) {
        clearInterval(intervalId);
        return;
       };
  daysOutput.textContent = timeLeft.days;
  hoursOutput.textContent = addLeadingZero(timeLeft.hours);
  minutesOutput.textContent = addLeadingZero(timeLeft.minutes);
  secondsOutput.textContent = addLeadingZero(timeLeft.seconds);
// console.log(timeLeft);
}, 1000)
})
}





