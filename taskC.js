let salaries = { John: 100, Ann: 160, Pete: 130};  

console.log(calculateSallary(salaries));

function calculateSallary(myobj){
    let sum=0;
     for (const prop in myobj) {
        sum+=myobj[prop];
     }
     return sum;
};