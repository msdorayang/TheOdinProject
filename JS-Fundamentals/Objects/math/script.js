function sumOfTripledEvens () {
    const array = [1,2,3,4,5,6];
    console.log(array);
    const evenNums = array.filter((num) => num % 2 === 0);
    console.log(evenNums);
    const tripledEvenNums = evenNums.map((num) => num * 3);
    console.log(tripledEvenNums);
    const sumOfTripledEvens = tripledEvenNums.reduce((sum, curr) => {
        return sum + curr;
    })
    console.log(sumOfTripledEvens);
};

sumOfTripledEvens();