const fibonacci = function(n) {
    
    if (n < 0 ) {
        return "OOPS"
    }
    
    let sequence = [1, 1]
    let value = 0
    for (let i = 2; i < n; i++) {
        value = sequence[i - 2] + sequence[i - 1]
        sequence.push(value)
    }
    console.log(sequence)
    return sequence[n - 1]
};

// Do not edit below this line
module.exports = fibonacci;
