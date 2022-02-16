/*

Here's how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/



let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber);
var registeredEarly = false;

let runnerAge = 18;

registeredEarly && runnerAge >= 18 ? raceNumber += 1000 : raceNumber = raceNumber;

console.log(raceNumber);

if (runnerAge > 18 && registeredEarly ==true) {
console.log(`You will race at 9:30AM and your race number is ${raceNumber}`) 
}

else if (runnerAge > 18 && registeredEarly == false){
console.log(`You will race at 11:00AM and your race number is ${raceNumber}`) 
}
else if (runnerAge < 18) {
  console.log(`You will race at 12:30 PM and your race number is ${raceNumber}`)
}
else {
  console.log(`As you are 18 years old, please reach the desk to registration`)
}