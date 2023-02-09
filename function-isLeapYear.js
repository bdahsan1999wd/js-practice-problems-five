function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    return false;
}
const leapYear = isLeapYear(2024);
console.log('This is leap year :-', leapYear);