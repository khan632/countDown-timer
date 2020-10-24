const daysPrint = document.getElementById('days');
const hoursPrint = document.getElementById('hours');
const minPrint = document.getElementById('min');
const secPrint = document.getElementById('seconds');

const Birthday = "26 july 2021";

function countDown(){
    const birth_Day = new Date(Birthday);
    const currDay = new Date();

    const totalSec = (birth_Day - currDay) / 1000;
    
    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec) % 60;

    daysPrint.innerHTML = days;
    hoursPrint.innerHTML = formatTime(hours);
    minPrint.innerHTML = formatTime(mins);
    secPrint.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);