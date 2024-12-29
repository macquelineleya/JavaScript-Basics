// arrays in depth
// array methods
// let names =['anurag', 'akash', 'pradip', 'anirudh'];
// console.log(names);
// console.log(names[3]);
// console.log(names[names.length - 1]);
// names[2] = 'vinay';
// console.log(names[2]);


// let namess = new Array['name1','name2'];
// console.log(names);
// this is also a way to declare arrays but not reccomendable


// push-wen u want to insert some value inside your array tho at the end
// names.push('Vyom');
// console.log(names);

// slice- you use this when you have a range of values but using their indices..
// but the last value would not be included.
// console.log(names.slice(1,3));

// splice()-also inserts values at specific indexes in the array;
// let fruits = ['Appple', 'orange', 'mango'];
// fruits.splice(2,0, 'watermelon','peers');
// console.log(fruits);
// output: ['Appple','orange','watermelon','peers', 'mango']

// fruits.splice(2,1, 'watermelon','peers');
// console.log(fruits);
// output: ['Appple', 'orange','watermelon','peers']

// concatenation
// let arr1 =[1 ,2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// console.log(arrr1.concat(arr2));
// let arr3 = [9,10,12,13];
// console.log(arrr1.concat(arr2, arr3));

// fill
// let arr4 = [1,3,2,5,7];
// arr4.fill('Anurag', 2, 4);
// console.log(arr4);

// include
// let arr4 = [1,3,2,4,5,6,7];
// arr4.include(7,6);
// check if value 7 is correctly put at index 6

// indexOf
// console.log(arr4.indexOf(7));
// check if the index of 7 in the array which is 6

// last indexof
// console.log(arr4.lastIndexOf(7));


// let Arr1 = [1,2,3,4,5,6,7];
// console.log(Arr1.join('And'));

// pop
// let Arr1 = [1,2,3,4,5,6,7];
// console.log(Arr1.pop());

let name = 'Anurag';
let array1 = name.split('');
console.log(array1);



