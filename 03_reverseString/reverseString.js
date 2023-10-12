const reverseString = function(phrase) {
    ans = ''
    for (let i = phrase.length - 1; i > -1; i--) {
        ans += phrase[i]
    }
    return ans
};

// Do not edit below this line
module.exports = reverseString;
