import global from "./globalVar";

const DAYS = document.getElementById('days');
const HOURS = document.getElementById('hours');
const MINUTES = document.getElementById('minutes');
const SECONDS = document.getElementById('seconds');
const WISHES = document.getElementById('wishes');

const currentYearUTC = new Date().getUTCFullYear();
const nextYearUTC = new Date(currentYearUTC + 1);

const updateTimer = () => {
    const currentTime = Date.now();
    const newYearUTC = new Date(Date.UTC(nextYearUTC, 0, 1, 0, 0, 0, 0));
    global.diff = newYearUTC - currentTime;
   
    if (!global.diff) {
        DAYS.textContent = '0'; 
        HOURS.textContent = '0'; 
        MINUTES.textContent = '0';
        SECONDS.textContent = '0';
        WISHES.textContent = 'Happy New Year!';
        return;
    }
    const daysRemain = Math.floor(global.diff / 1000 / 60 / 60 / 24);
    const hoursRemain = Math.floor((global.diff / 1000 / 60 / 60) % 24);
    const minutesRemain = Math.floor((global.diff / 1000 / 60)  % 60);
    const secondsRemain = Math.floor((global.diff / 1000)  % 60);
    
    DAYS.textContent = daysRemain; 
    HOURS.textContent = hoursRemain; 
    MINUTES.textContent = minutesRemain;
    SECONDS.textContent = secondsRemain;
}
export default updateTimer;
