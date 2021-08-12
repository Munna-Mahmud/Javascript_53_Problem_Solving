
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



//problem 12##############################
//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    var ar2 = [];
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];
        
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);


