const secondHand = document.querySelector('.second-hand');
const minutesHand= document.querySelector('.min-hand');
const hoursHand= document.querySelector('.hour-hand');

function setDate(){
  // pulling the date
const now = new Date();
// extracting seocnds, minutes, hours  
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();

// converting second to degrees and add 90deg as we set off in our css so the hands can be up down
const secondsDegrees = ((seconds/60)*360)+ 90;
const minutesDegress =((minutes/60)*360)+90;
const hoursDegress =((hours/12)*360)+90;

// applaying style to second hand and rotate based on secondsdegrees
secondHand.style.transform =  `rotate(${secondsDegrees}deg)`;
minutesHand.style.transform=`rotate(${minutesDegress}deg)`;
hoursHand.style.transform= `rotate(${hoursDegress}deg)`;


console.log(seconds);
}
setInterval(setDate, 1000);
