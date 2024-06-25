const sumAll = function(start, end)
{
    if (start < 0 || end < 0 || typeof(start) != 'number' || typeof(end) != 'number')
        return "ERROR";
    
    let sum = 0;

    let lower = start;
    let higher = end;
    
    if (start > end)
        {
            higher = start;
            lower = end;
        }

    for (i = lower; i <= higher; i++) sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
