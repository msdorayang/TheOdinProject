const sumAll = function(min, max) {
    let sum = 0;
    if (max > min) {
        for (let step = min; step <= max; step++) {
            sum += step;
        }
    } else if (max < min) {
        for (let step = max; step <= min; step++) {
            sum += step;
        }
    } else {
        sum + min;
    }
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    } else return sum;
};

// Do not edit below this line
module.exports = sumAll;
