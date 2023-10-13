const sumAll = function(a, b) {
    if (a > b) {
        let temp = b
        b = a
        a = temp
    }

    if (a < 0 || b < 0) {
        return "ERROR"
    }

    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return "ERROR"
    }

    // Sum of arithmetic progression
    ans = ((b - a + 1) / 2) * (a + b)
    return ans
};

// Do not edit below this line
module.exports = sumAll;
