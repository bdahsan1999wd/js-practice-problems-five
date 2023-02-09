function isEven(number){
    const remainder = number % 2;
    console.log(remainder);
}
isEven(300);

/* --------------------------------------- */

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        // console.log('number is even', remainder);
        // return 'number even';
        return true;
    }
    else{
        // console.log('number is odd', remainder);
        // return 'number odd';
        return false;
    }
}
const isOrEven = isEven(10);
console.log(isOrEven);