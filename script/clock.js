const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')

function setTime() {
    const now = new Date()
    const formatTime = (time) => (time < 10) ? `0${time}` : time

    hours.textContent   = formatTime(now.getHours())
    minutes.textContent = formatTime(now.getMinutes())
}

setTime()
window.setInterval(setTime, 1000);