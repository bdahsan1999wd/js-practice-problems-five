function milesToKm(miles){
    let km = miles * 1.609344;
    let kilo = km.toFixed(2);
    // km = parseFloat(kilo);
    return kilo;
}
const mile = 3.1;
const kilometer = milesToKm(mile);
console.log(kilometer);