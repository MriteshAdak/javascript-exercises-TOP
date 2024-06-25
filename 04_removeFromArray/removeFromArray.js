const removeFromArray = function(anArray, ...optArgs)
{
    for (let arg of optArgs)
    {
        for (let i = anArray.length; i >= 0; i--) // Decrementing because the array length will change if splice is invoked 
        {                                         // and subsequent elements will change indexes leading to
            if (anArray[i] === arg)               // skipped elememts in the iteration
                anArray.splice(i, 1);
        }
    }

    return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
