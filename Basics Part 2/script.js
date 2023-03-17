"use strict"; // shows errors console

// let hasLicense = true ;

// if (hasLicense) console.log('i can drive');
// if (hasLicense)console.log('nop');

// Reserved words === shows error while using it;

// const interface = video;
// const private = audio;

//Function

// function hello(){
//     console.log('Hello world!');
// }
// hello();
// hello();

// function fruits(banana , apple){
//     const juice = `juice with ${banana} banana and ${apple} apple `;
//     return juice;
// }

// const bananaJuice = fruits(10 ,0);
// console.log(bananaJuice);

// Function declaration

//Function definition
// function calcAge(birthYear) {
//  birthyear can be called as parameter;
// const age = 2022 - birthYear;
// return 2022 - birthYear;
// }
// FUnction calling
// const age1 = calcAge(1996); // 1996 can be called as actual value to fill in the parameter

// Function expression

// const calcAge2 = function (birthyear) {
// const age1 = 2022 - birthyear;
//   return 2022 - birthyear;
// };

// const age2 = calcAge2(1999);

// console.log(age1, age2);

// Arrow function

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetirement = (birthYear , firstname) => {
//   const age = 2023 - birthYear;
//   const retirement = 56 - age;
//   // return retirement
//   return `${firstname} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1996 , 'JIshnu'));
// console.log(yearsUntilRetirement(1967 , 'Gopalan'));

// Callling function in other functions
// function fruitPieces(fruit) {
//   return fruit * 2;
// }

// function fruits(banana, apple) {
//   const bananPieces = fruitPieces(banana);
//   const applePieces = fruitPieces(apple);
//   const juice = `juice with ${bananPieces} banana and ${applePieces} apple `;
//   return juice;
// }

// const freshJuice = fruits(7, 5);
// console.log(freshJuice);
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstname) {
//     const age = calcAge(birthYear);
//     //   const age = 2023 - birthYear;
//     const retirement = 56 - age;

//     if (retirement > 0) {
//         console.log(`"${firstname} retires in ${retirement} years"`);
//         return retirement;

//     } else {
//         console.log(`"The ${firstname} is already retired"`);
//         return -1;

//     }

//     // return retirement;
//     //   return `${firstname} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1996, 'JIshnu'));
// console.log(yearsUntilRetirement(1966, 'Gopalan'));

// Coding Challenge 1

// const calcAvg = (a , b , c) => (a + b + c)/3

// Arrays

// const friends = ['Jishnulal', 'Ajay', 'LaL'];
// console.log(friends);

// const years =  new Array (1996, 1555);
// console.log(years[0]);

// console.log(friends.length);
// console.log(friends[friends.length-2]);

// friends[2] = 'Lalu';
// console.log(friends);

// const firstname = "Jishnu";
// const jishnu = [firstname , 'lal', 2023 - 1996 , 'Flutter Developer', friends];
// console.log(jishnu);
// console.log(jishnu.length);

//Exercise

// const calcAge = function (birthYear){
//     return 2023 - birthYear;
// }
// const years = [1990 , 1991 , 1992 ,1993 , 1994 ];

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[2]));
// console.log(calcAge(years[3]));

// const ages = [calcAge(years[0]), calcAge(years[1]) ,calcAge(years[2]) ,calcAge(years[3])];
// console.log(ages);

// Array operations

//Add elements
//push
// const friends = ['Jishnulal', 'Ajay', 'LaL'];
// const length = friends.push('Ammu'); //push is a function(Adds to the end)
// console.group(friends);
// console.log(length);
// //Unshift
// friends.unshift('JLaL');
// console.log(friends);

// //Remove elements
// friends.pop(); //last element is removed
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// console.log(friends.indexOf('LaL'));
// console.log(friends.indexOf('hi'));

// console.log(friends.includes('Ajay'));
// console.log(friends.includes('hi'));

// Coding Challenge 2

// Objects

// const jishnu = {
//     firstname : 'Jishnu',
//     lastname :'LaL',
//     age : 2023 - 1996,
//     job : 'Intern',
//     friends : ['Jishnulal','Lalu','Thiona']
// };
// console.log(jishnu);

// console.log(jishnu.age);
// console.log(jishnu['job']);

// const nameKey = 'name';
// console.log(jishnu['first' + nameKey]);
// console.log(jishnu['last' + nameKey]);
// const insterst = prompt('What do you want to know about Jishnu? Choose between firstname, lastname, age, job and friends');
// // console.log((jishnu)[insterst]);

// if(jishnu[insterst]) {
//     console.log(jishnu[insterst]);
// }else{
//     console.log('wrong req');
// }

//  jishnu.location = 'India';
//  jishnu['twitter'] = '@jishnulal';
//  console.log(jishnu);

//  console.log(`${jishnu.firstname} has ${jishnu.friends.length} and his best friend is called ${jishnu.friends[1]}`);

// object methods

// const jishnu = {
//   firstname: "Jishnu",
//   lastname: "LaL",
//   birthYear: 1996,
//   job: "Software developer",
//   friends: ["Jishnulal", "Lalu", "Thiona"],
//   hasDriversLicense: true,

  // calcAge : function(birthYear){
  //     return 2037 - birthYear;
  // }
  //    calcAge : function(){
  //     console.log(this);
  //     return 2037 - this.birthYear;
  // }
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary:function(){
//     return `${this.firstname} is a ${this.calcAge()} year old ${jishnu.job}, and he has ${this.hasDriversLicense ?'a': 'no'} driver's license`;
//   }
// };

// console.log(jishnu.calcAge(1996));

// console.log(jishnu.age);
// console.log(jishnu.age);
// console.log(jishnu.age);

// Challenge

// "Jishnu is a 46 year old teacher, and he has a/no driver's license" using get summary

// console.log(
//   `Jishnu is ${jishnu.age} year old teacher , and he has ${jishnu.hasDriversLicense} driver's license` 
// );

// console.log(jishnu.getSummary());

// Iteration for loops

// for(let rep = 0; rep <= 10; rep++){
//   console.log(`Lifting weights repetion ${rep}🤞 ` );
// }