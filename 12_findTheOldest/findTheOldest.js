const findTheOldest = function(array) {
    // access yearOfDeath from the array if it's undefined, add the value of this year
    array.forEach(person => {
        if("yearOfDeath" in person) {
            return person;
        }
        else
        {
            person['yearOfDeath'] = 2024;
            return person;
        }
    })
    // sort all the people by age
    const inOrder = array.sort(function(a, b) {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
      })
    // return the person at the top of the list
    return inOrder[0];
};

// Do not edit below this line
module.exports = findTheOldest;
