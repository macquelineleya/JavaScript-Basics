// conditions
// if else
// switch case
// ternary operators or operations

// mini rating App
// let rating = 5;
// if (rating = 5){
//     console.log('5 stars');
// }
// else if (rating = 4){
//     console.log('4 stars');
// }
// else if (rating = 3){
//     console.log('3 stars');
// }
// else{
//     console.log('I am out');
// }

// switch case
// let user = 'Admin';

// switch(user){
//     case'Admin' :
//     console.log('Redirect him/her to the Admin page');
//     break;
//     case 'Mentor':
//         console.log('Redirect him/her to the mentor dashboard');
//         break;
//     default:
//         console.log('I am just a user');
// }
// Ternary Operators/conditions
let raining = true;
raining ? console.log('It is raining') : console.log('It is not raining');
//Condition ? true:false

let userlogin = true;
// incase on our webpage a user has logged in;
userlogin ? console.log('Log out') : console.log('Log in');
//if yes the user logged in, he can now be shown the logout button otherwise
//will have to login



// array
let name = ['Anurag','shabn', 'shat','Britney','jihnb','Akashd'];
console.log(name);
console.log(name[5]);

// object
let bankaccount ={
    firstname : 'Nabeela',
    lastname : 'last',
    mobileno : 732566691012,
}
console.log(bankaccount);
console.log(bankaccount.mobileno);

// date and mtc
const now = new Date();
console.log(now);
// Date is a method, new keyword assigns /requests for space in memory to 
//store the variables(now) value
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getTime());

// math
const PI  = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.round(89.0675));
console.log(Math.floor(89.0675));
// floor rounds down a value 
console.log(Math.ceil(89.0675));
// ceil rounds up a value

// min and max
console.log(Math.min(10,34,12,787));
console.log(Math.max(10,34,12,787));



