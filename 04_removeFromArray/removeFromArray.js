const removeFromArray = function(arr) {
    
    // We are using a list to store all the numbers to be removed from the array
    let toRemove = []
    
    // Takes all the arguments provided except for the first one, because it's the array
    for (let i = 1; i < arguments.length; i++) {
        toRemove.push(arguments[i])
    }

    let pointer = 0
    let removed = false
    while (pointer < arr.length) {
        
        removed = false
        if (pointer == arr.length) {
            break
        }

        toRemove.forEach(element => {
            if (element === arr[pointer]) {
                arr.splice(pointer, 1)
                removed = true
            }
        });
        if (!removed) {
            pointer++
        }
    }
    console.log(arr)
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
