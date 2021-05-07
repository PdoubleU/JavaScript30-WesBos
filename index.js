const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = currentTime.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hrs = currentTime.getHours();

    const hrsDegrees = ((hrs / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hrsDegrees}deg)`;
}

setInterval(setDate, 1000);