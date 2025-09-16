
function updateClock(){
    const clock = document.getElementById('clock');
    let date = new Date();
    let time = date.toLocaleTimeString();
    clock.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);