function inchToFeet(inches){
    let feet = inches / 12;
    let foots = feet.toFixed(3);
    feet = parseFloat(foots);
    return feet;
}
const heightInches = 70
const heightFeet = inchToFeet(heightInches);
console.log(heightFeet);