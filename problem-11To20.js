
//problem 11 ############################
//Coding challenge #11: Calculate the average of the numbers in an array of numbers

    function arrayAvarage(array){
        let n=array.length;
        let sum=0;
        for(let i=1; i<n; i++){
            sum+=array[i];
        }return sum/n;
    }const array=[234, 324, 23, 23, 453, 53];
    console.log(arrayAvarage(array));
//  another way 
function arraySum(array){
    let n=array.length;
    let sum=0;
    for( let i=1; i<n; i++){
        sum+=array[i];
        return sum/n;
    }
}const array=[34, 354, 56, 45, 56, 67, 78];
console.log(arraySum(array));


//problem 12##############################
//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(array){

 let array2 =[ ];

    for( let i=0; i<array.length; i++){
        let el=array[i]

        if( el>=0 ){
            array2.push(el)
        }
    }
return array2;

} const array=[ 23, -34, 46, -64, 736, -76];
console.log(getPositives(array));


//problem 13
// Coding challenge #13: Find the maximum number in an array of numbers

function findMax(ar) {
    var max = ar[0];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:", max);

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}

console.log(largest);