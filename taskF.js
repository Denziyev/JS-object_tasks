let john = { name: "John", age: 25 }; 
  let pete = { name: "Pete", age: 30 }; 
  let mary = { name: "Mary", age: 28 }; 
  let users = [ john, pete, mary ]; 
 
  let names=[];
   users.forEach(element => {
    names.push(element['name'])
  });
  console.log( names ); // John, Pete, Mary