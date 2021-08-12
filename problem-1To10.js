//problem 01###########################################################################
// Coding challenge #1: Print numbers from 1 to 10

// for(var i = 1; i <= 10; i++)
// { 
//     console.log(i);
// }

// for (var i=1; i<=10; i++){
//     console.log(i);
// }
// var i=0;
// while(i<10){
//     i++;
//     console.log(i);
// }
// we can't use const here cz  const declarations can only be accessed within the block they were declared.
// let i=0;
// while(i <10){
//     i++;
//     console.log(i);
// }
//  for( let i=1; i<=10; i++){
//      console.log(i);
//  }
// for(let i=1; i<=10; i++){
//     if(i%2 !=0){

//         console.log(i);
//     }
// }

//Problem-02#############################################################
// Coding challenge #2: Print the odd numbers less than 100

// for(let i=0; i<=100; i++){
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }
// let i=0;
// while(i<100){
//     i++;
//     if(i%2 !=0){
//         console.log(i);
//     }
// }
//  for(let i=0; i<=100; i++){
//      if(i%2 !=0){
//          console.log(i);
//      }
//  }

// let i=0;
// while(i<100){
//     i++;
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }

//problem-03##########################################################################
// Coding challenge #3: Print the multiplication table with 7

// for(var i = 1; i <= 10; i++)
// {
//     var row = "7 * " + i + " = " + 7 * i;
//     console.log(row);
// }

// for(let i=1; i<=10; i++){
//     const row=" 3 * " + i + " = " + 3 * i;
//     console.log(row);
// }
// let i=1;
// while (i<10){
//     i++;
//     const row=" 5 * " + i + " = " + 5 * i;
//     console.log(row);
// }

// for ( let i=1; i<=10; i++){
//     const row=" 4 * "+ i + " = " + 4 * i;
//     console.log(row);
// }

//problem -04####################################################################################
// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

// for(let i=1; i<=10; i++){
//     const row= " 10 * " + i + " = " + 10 * i;
//     console.log(row);
// }

// WOOWWWWOWOWOWWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOOWOWOWOWOWOWOWO

// for(var i = 1; i <= 10; i++)
// {
//     printTable(i);
//     console.log(" ");
// }

// function printTable(n)
// {
//     for(var i = 1; i <= 10; i++)
//     {
//         var row = n + " * " + i + " = " + n * i;
//         console.log(row);
//     }
// }

// for(let i=1; i<=10; i++){
//     PrintTable(i);
//     console.log(" ");
// }
// function PrintTable(n){
//     for(let i=1; i<=10; i++){
//         const result= n + " * " + i + " = " + n*i;
//         console.log(result);
//     }
// }

// for(let i=1; i<=10; i++){
//     printTable(i);
//     console.log(" ");
// }
// function printTable(n){
//     for(let i=1; i<=10; i++){
//         const table=n + " * " + i + " = " + n*i;
//         console.log(table);
//     }
// }
 // simple way 
//  for ( let i=1; i<=10; i++){
//     let assign=i;

//     for(let n=1; n<=10; n++ ){
//         row= assign + " * " + n + " = " + n*assign;
//         console.log(row);
//     }
//     console.log(" " );
// }

    // for( let i=1; i<=10; i++){
    //    let assaign=i;

    //    for( let n=1; n<=10; n++){
    //        let row=assaign + " * "+ n + " = " + n* assaign;
    //        console.log(row)
    //    }
    //    console.log(" ")
    // }



// wowowoWOWOWOWwowowowoWOWOWOWOWOWOWwowowowowowowWOWOWowowoowowowWOWOWOWOWowoowowo

//problem-05#########################################################################
// Coding challenge #5: Calculate the sum of numbers from 1 to 10

// let sum=0;
// for( let i=1; i<=10; i++){
//     sum +=i;
// }console.log(sum);

// var sum = 0;

// for(var i = 1; i <= 10; i++)
// {
//     sum += i;
// }
// console.log(sum);

//problem-06##########################################################################################
//Coding challenge #6: Calculate 10!

// var prod = 1;
// for(var i = 1; i <= 10; i++)
// {
//     prod *= i;
// }
// console.log(prod);

// let prod=1;
// for(let i=1; i<=20; i++){
//  prod*=i;
// }console.log(prod);

//problem 07###############################################################################
// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

// let sum=0;
// for(let i=11; i<=30; i++){
//     if( i % 2 !=0){
//         sum +=i;
//     }
// }
// console.log(sum);

// var sum = 0;
// for(var i = 11; i <= 30; i += 2)
// {
//     sum += i;
// }
// console.log(sum);

// let sum=0;
// for(let i=21; i<=40; i++){
//     if(i%2 !=0){
//         sum+=i;
//     }
// }console.log(sum);


//problem 08################################################################################
//Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

// function celsiusToFahrenheit(farent)
// {
//     return farent * 1.8 + 32;
// }

// var r = celsiusToFahrenheit(20);
// console.log(r);
// function celsiusToFahrenheit(farent){
//     let relsut=(farent - 32) * 5/9;
//     return relsut;
// }
// const farentResult=celsiusToFahrenheit(50);
// console.log(farentResult);

// https://hackernoon.com/javascript-practical-coding-challenges-for-beginners-4bq3ugr

//problem 09##################################################################################
// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
// function FahrenheitToCelsious(cels){
//     let relsut=(cels * 9/5) + 32;
//     return relsut;
// }
// let celsious=FahrenheitToCelsious(46);
// console.log(celsious);

// function faToCel(cel){
//     let result=(cel * 9/5) -32;
//     return result;
// }const cels=faToCel(54);
// console.log(cels);

// function faToCel(cel){
//     let result=(cel * 9/5)-32;
//     return result;
// }
// const cels=faToCel(87);
// console.log(cels);

//problem 10######################
//Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumArray(ar)
{
    var sum = 0;

    for(var i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }

    return sum;
}
//  another way 
var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
console.log(sum);

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
} let array = [234, 234, 54, 23, 12, 5, 64];
// const result=sumArray(array);
console.log(sumArray(array));




