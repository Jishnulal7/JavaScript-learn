/*
let js ="amazing";
console.log(5 + 10 + 20 - 3);

let firstName = "Jishnu";
console.log(firstName);

let lastName = "LaL";
console.log(lastName);

console.log(firstName);

let year_ = 4;
console.lo(year_);
*/
// true;

// let javascriptisFun = true;
// console.log(typeof javascriptisFun);

// console.log(typeof true );
// console.log(typeof 23 );
// console.log(typeof 'true' );

// javascriptisFun = '5';
// console.log(typeof javascriptisFun);

// let fun;
// console.log(fun);
// console.log(typeof fun);

// fun='holiday';
// console.log(typeof fun);

// fun=10;
// console.log(typeof fun);

// console.log(typeof null);

// Arithmetic Operators

//Subtraction
// const now = 2022;
// const ageJishnu = now - 1996;
// const ageJishma =now - 1999;
// console.log(ageJishnu,ageJishma);

// console.log(ageJishnu *2 , ageJishnu/5 , 2**3,1+2);
//Addition
// const firstName = 'Jishnulal';
// const lastName = 'p';
// console.log(firstName + ' ' + lastName);

//Assignment operators

// let x = 5;
// x +=10; //x= x+10
// x *=10; //x=x*10
// x /=10;//x=x/10
// x -=10;//x=x-10
// x ++;jishnulal9497@gmail.cs

// console.log(ageJishnu > ageJishma);
// console.log(ageJishma >= 30);

// const fullAge = ageJishnu >= 20;

// console.log(now - 1996 > now -1999 );

//Order of precedence

// const now = 2022;
// const ageJishnu = now - 1996;
// const ageJishma = now -1999;

// console.log( now - 1996 > now -1999);  // subtraction has highest priority than comparison;

// let x ,y;
// x = y = 15 + 10 - 5; // x = y = 20 , x = 10
// console.log(x , y);

// const averageAge = (ageJishnu + ageJishma) /2;
// console.log(ageJishma ,ageJishnu , averageAge);

//Coding challenge #1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBmi = markMass / markHeight **2;
// const johnBmi = johnMass / (johnHeight * johnHeight);

// const markHigherBmi = markBmi > johnBmi;
// console.log(markBmi,johnBmi ,markHigherBmi);

// Conditional Statements (if - else);

// Example 1

// const age = 14;

// if(age >= 18){
// console.log('Is legal to drive');
// }else{
//     const yearLeft = 18 - age;
// console.log(`is not legal to drive. Wait another  ${yearLeft} years :`);
// }

// //Example 2

// let a = 17;
// let b = 70;

// if( a >= b){
//     console.log('a is greater than b');
// }else{
//     console.log('b is greater than a');
// }

// //Example 3

// const birthYear = 2001;

// let century;

// if(birthYear <= 2000 ){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// Coding Challenge #2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBmi = markMass / markHeight **2;
// const johnBmi = johnMass / (johnHeight * johnHeight);

// const markHigherBmi = markBmi > johnBmi;
// console.log(markBmi,johnBmi ,markHigherBmi);

// if (markBmi > johnBmi){
// console.log(`Mark's bmi (${markBmi}) is higher than john's (${johnBmi})`);
// }else{
//   console.log(`John's bmi (${johnBmi}) is higher than mark's (${markBmi})`);
// }

// (${})

//Type conversion

// const inputYear = '1996';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 26);

// const newName = 11;
// console.log(String(newName), newName);

//Type coercion

// console.log('1'+ '10'+5);
// console.log('30' - '5' - 10 );

// let n= '1' + 1 ;
// n = n - 1;
// console.log(n);

// 5 falsy values : 0, '' ,  undefined, null , NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10;
// if(money){
//     console.log("Spend it!")
// }else{
//     console.log("Don't spend");
// }

// let weight=4;
// if(weight){
//     console.log("weight is defined");
// }else{
//     console.log("weight is undefined");
// }

// const age = 18;
// if (age === 18) console.log("You are an adult now [Strict]");

// if (age == 18) console.log("You are an adult now [Loose");

// const number = prompt("Enter a number");

// console.log(number);
// console.log(typeof number);

// const dice = Number (prompt("Enter a number"));
// console.log(dice);
// console.log(typeof dice);

// if (dice === 6){
//     console.log('Cool you got 6');
// } else if (dice ===5) {
//     console.log("You have got 5");
// }else if (dice ===4) {
// console.log("you havwe got 4")
// }else{
//     console.log("you failed");
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);

// console.log(hasDriversLicense || hasGoodVision);

// console.log(! hasGoodVision);

// if(hasDriversLicense || hasGoodVision){
//     console.log("Jishnu is able to drive");

// }else{
//     console.log("Jishnu can't drive");
// }

// const isTired = false;
// // console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && isTired){
//     console.log("Jishnu is able to drive");

// }else{
//     console.log("Jishnu can't drive");
// }

//  Coding challenge 3

// const scoreDolphins = (96 + 108 + 89)/3;
// console.log(Dolphins);
// const scoreKoalas = (88 + 91 + 110)/3;
// console.log(Koalas);

// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins are champions");
// }else if(  scoreKoalas > scoreDolphins){
//     console.log("Koalas are champions");
// }else if (scoreDolphins === scoreKoalas){
//     console.log("Both are champions");
// }

// Bonus 1

// const scoreDolphins = (97 + 112 + 81)/3;
// console.log(scoreDolphins);
// const scoreKoalas = (109 + 95 + 86)/3;
// console.log(scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100 ){
//     console.log("Dolphins are champions");
// }else if(  scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas are champions");
// }else if (scoreDolphins === scoreKoalas && scoreDolphins >=100 && scoreKoalas >= 100){
//     console.log("Both are champions");
// }else{
//     console.log("no one is champions");
// }

// Switch Statement

// const day = "sunday";

// switch (day) {
//   case "Monday":
//   case "Wednesday":
//   case "Friday":
//     console.log("Working day");
//     break;
//   case "Tuesday":
//   case "Thursday":
//     console.log("Non working day");
//   case "sunday":
//   case "saturday":
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }


// if(day === 'monday' ){
//     console.log('working day');
// }else if ( day === 'wednesday'){
//     console.log('working day');
// }else if( day === 'friday'){
//     console.log('working day');
// }
//  else if( day === 'tuesday'  ){
//     console.log('non working day');
// }else if ( day === 'thursday'){
//     console.log('non working day');
// }
// else if (day === 'sunday' ){
//     console.log('holiday!');
// }else if( day === 'saturday'){
//     console.log('holiday!');
// }
// else{
//     console.log('not applicable');
// }

// Ternary Operators  ?

// const age = 146;

// age >= 18 ? console.log('You can take driving test') : console.log('You are not eligible for the test');

// const drink = age >=18 ? console.log('I like to drink wine 🍷') : console.log("i like to drink water 💧");

// console.log(`i like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Coding challenge 4

// const bill = 430;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`'The bill was ${bill}, tip is ${tip} and the total value is ${bill + tip}`);