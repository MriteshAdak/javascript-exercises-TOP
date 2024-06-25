const reverseString = function(aString)
{
    let reversedString = "";

    for (let i = (aString.length - 1); i >= 0; i--) 
    {
        reversedString += aString[i];
        console.log(i);
    }

    return reversedString; //alternatively return aString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;