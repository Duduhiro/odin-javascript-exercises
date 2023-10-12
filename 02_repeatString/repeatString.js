const repeatString = function(word, repeat) {
    ans = ''
    if (repeat < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < repeat; i++) {
        ans += word
    }
    return ans
};

// Do not edit below this line
module.exports = repeatString;
