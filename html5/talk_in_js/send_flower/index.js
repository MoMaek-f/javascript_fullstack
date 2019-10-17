const secondhand =document.querySelector('.second-hand')
const minhand =document.querySelector('.min-hand')
const hourhand =document.querySelector('.hour-hand')
function setDate(){
 const now = new Date();
const seconds = now.getSeconds();
const secondsDrgees=((seconds/60)*360)+90;
secondhand.style.transform=`rotate(${secondsDrgees}deg)`;

const min = now.getMinutes();
const minDrgees = ((min/60)*360)+90;
minhand.style.transform=`rotate(${minDrgees}deg)`;

const hour = now.getHours();
const hourDrgees = ((hour/12)*360)+90;
hourhand.style.transform=`rotate(${hourDrgees}deg)`;

}
setDate();
setInterval(setDate,1000)

//  var secondDeg = date.getSeconds()*360/60;