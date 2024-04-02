const palindromes = function (string) {
    // create variable to store all possible characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890'
    // force into lowercase and split into an array
    const array = string
        .toLowerCase()
        .split("");
    // filter out all the characters that are not letters or numbers
    const filtered = array
        .filter((character) => alphanumerical.includes(character));
    // make the filtered array back into a string
    const reString = filtered.join("");
    // reverse the filtered array and string
    const reverseString = filtered.reverse().join("");
    return (reString === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
