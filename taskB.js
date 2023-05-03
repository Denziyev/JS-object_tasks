let schedule={};
console.log(isempty(schedule));

schedule["8:30"] = "get up";
console.log(isempty(schedule));

function isempty(myobj){
   return (!Object.values(myobj)[0]);
}