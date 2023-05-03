let user = {
    name: 'John',
    age: 30
  };
  console.log( count(user) ); // 2


  function count(myobj){
    let count=0;
    for (const property in myobj) {
             count++;
    }
    return count;
  }