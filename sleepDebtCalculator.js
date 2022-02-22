const getSleepHours = (day) =>{
  if (day === 'monday'){
    return 6.5;
  }
  else if (day === 'tuesday') {
    return 6.5;
  }
  else if (day === 'wednesday'){
    return 6.5;
  }
  else if (day === 'thursday'){
    return 6.5;
  }
  else if (day === 'friday'){
    return 6.5;
  }
  else if (day === 'saturday') {
    return 5;
  }
  else if (day === 'sunday'){return 9;}
} 


const getActualSleepHours = () =>
  getSleepHours("monday")+
  getSleepHours("tuesday")+
  getSleepHours("wednesday")+
  getSleepHours("thursday")+
  getSleepHours("friday")+
  getSleepHours("saturday")+
  getSleepHours("sunday");

console.log("This is the time I am sleeping "+getActualSleepHours())

const getIdealSleepHours = () => {let idealHours = 7;
return idealHours*7;}

console.log("This is the time I should sleep " +getIdealSleepHours())


const calculateSleepDebt = ()=> {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
  console.log('You are sleeping the exact amount of hours')
} else if(actualSleepHours > idealSleepHours){
  console.log("You are sleeping more than the ideal time")
}else if(actualSleepHours < idealSleepHours){
  console.log("You are sleeping less than the ideal time")
}

if(actualSleepHours < idealSleepHours){
  console.log("You got " + (idealSleepHours- actualSleepHours)+ " hours lees than you need. Get more rest")
}
}
calculateSleepDebt();






