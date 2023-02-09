/* -----------------for loop------------------ */

// let sum = 0;
// for(let i = 1; i <= 7; i++){
//     sum = sum + i;
//     console.log(i, sum);
// }

/* ------------------function for loop------------------------ */

function sumOfnumbers(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
sumOfnumbers(10);