const COUNTDOWN_START_HOUR = 9;
const COUNTDOWN_END_HOUR = 16;
const MILLISECONDS_IN_HOUR = 60 * 60 * 1000;
const MILLISECONDS_IN_MINUTE = 60 * 1000;

function getLocalTime(timezone) {
    const localTime = new Date();
    const options = { timeZone: timezone };
    return new Date(localTime.toLocaleString("en-US", options));
}

function calculateCountdown() {
    const bucharestTime = getLocalTime("Europe/Bucharest");
    const now = new Date();

    const targetHour = now.getHours() >= COUNTDOWN_START_HOUR && now.getHours() < COUNTDOWN_END_HOUR
        ? COUNTDOWN_END_HOUR
        : COUNTDOWN_START_HOUR;

    const target = new Date(bucharestTime);
    target.setHours(targetHour, 0, 0, 0);
    if (now.getHours() >= COUNTDOWN_END_HOUR) {
        target.setDate(target.getDate() + 1);
    }

    const remaining = target - now;
    const hours = Math.floor(remaining / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor((remaining % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor((remaining % MILLISECONDS_IN_MINUTE) / 1000);

    return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    };
}

function updateCountdown() {
    const { hours, minutes, seconds } = calculateCountdown();
    const countdown = `${hours}:${minutes}:${seconds}`;
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = countdown;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

