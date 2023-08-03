const removeFromArray = function(input_array, ...args) {
    console.log("input_array before: " + input_array);
    // check if args is an input_array
    for (let arg of args) {
        if (input_array.includes(arg)) {
            input_array = input_array.filter((item) => item !== arg);
        }
    }
    console.log("input_array after: " + input_array);
    return input_array;

};

// Do not edit below this line
module.exports = removeFromArray;
