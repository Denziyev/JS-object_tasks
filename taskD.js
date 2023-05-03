let message;
let login='';

message= login == 'Employee'?  'Hello' 
        :login == 'Director'? 'Greetings'
        :login == ''? 'No login' 
        : '';

console.log(message);
