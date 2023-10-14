const palindromes = function (s) {
    
    let skipper = 0
    let end_skipper = 0

    s = s.toLowerCase()
    s = s.replaceAll(' ', '')

    for (let i = 0; i < s.length; i++) {
        if (s[i + skipper] === '!' || s[i + skipper] === ',' || s[i + skipper] === '.' || s[i + skipper] === '?') {
            skipper++
        }
        if (s[s.length - i - 1 - end_skipper] === '!' || s[s.length - i - 1 - end_skipper] === ',' || s[s.length - i - 1 - end_skipper] === '.' || s[s.length - i - 1 - end_skipper] === '?') {
            end_skipper++
        }
        if (s[i + skipper] != s[s.length - i - 1 - end_skipper]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
