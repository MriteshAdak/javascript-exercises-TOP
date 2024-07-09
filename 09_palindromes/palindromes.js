const palindromes = function (str) {
    const cleanStr = str.toLowerCase().split('').filter((char) => 
        {
            return ((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57));
        }).join('');

    const reverseStr = [...cleanStr].reverse().join('');
    
    return reverseStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
