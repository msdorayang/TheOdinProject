const fibonacci = function(num) {
    num = Number(num);
    if (num === 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    else {
    const fibs = [1,1];
    for (i = 1; i <= num-2; i++) {
        var currentFib = fibs[i];
        var previousFib = fibs[i-1];
        var nextFib = currentFib + previousFib;
        fibs.push(nextFib);
    }
    return fibs[fibs.length-1];
}};
// Do not edit below this line
module.exports = fibonacci;
