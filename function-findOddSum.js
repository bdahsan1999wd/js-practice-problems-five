function getSumOfAnArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const index = i;
        // console.log(index);
        const element = array[index];
        // console.log(element);
        sum = sum + element;
        // console.log(sum);
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumberOfAnArray(array){
    let oddNumbers = [];
    for(let i = 0; i < array.length; i++){
        const index = i;
        // console.log(index);
        const element = array[index];
        // console.log(element);
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbersArray = [12, 65, 45, 78, 32, 45, 91];
console.log('My Numbers Array:-', myNumbersArray);

const sumOfNumbers = getSumOfAnArray(myNumbersArray);
console.log('Sum Of Numbers:-', sumOfNumbers);

const oddOfNumbers = getOddNumberOfAnArray(myNumbersArray);
console.log('Odd Of Numbers:-', oddOfNumbers);

const oddNumberSum = getSumOfAnArray(oddOfNumbers);
console.log('Odd Number sum:-', oddNumberSum);