const repeatString = function(inputString, repeatTimes)
{
    if(repeatTimes < 0) return "ERROR"; //try catch is another alternative to if else?
    else
    {
        repeatedString = "";
        
        for (let i = 0; i < repeatTimes; i++) //string.repeat() can be used instead
            repeatedString += inputString;

        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;