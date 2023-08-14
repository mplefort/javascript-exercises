const palindromes = function (string) {
    let stringArray = string.toLowerCase().split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArray = alphabet.split("");
    let stringArrayFiltered = stringArray.filter(item => alphabetArray.includes(item));
    let stringFiltered = stringArrayFiltered.join("");
    let stringFilteredReversed = stringFiltered.split("").reverse().join("");
    return stringFiltered === stringFilteredReversed;

};

// Do not edit below this line
module.exports = palindromes;
