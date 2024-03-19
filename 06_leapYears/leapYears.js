const leapYears = function(year) {
    if (year % 4 === 0 
        // year is divisible by 4
        && year % 100 !== 0 || 
        // and year is NOT divisible by 100
        year % 400 === 0)
        // OR - year is divisible by 400
        {
            return true;
        } else {
            return false;
        }
};

// Do not edit below this line
module.exports = leapYears;
