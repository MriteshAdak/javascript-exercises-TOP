const fibonacci = function(index) {
    
    if(index < 0)
        return 'OOPS';

    index = parseInt(index);
    const series = createFibonacciSeq(index + 1);
    
    return series[index];
};

function createFibonacciSeq(length)
{
    let fibonacciSeries = [];
    for (let i = 0; i < length; i++)
    {
        if (i == 0 || i == 1)
        {
            fibonacciSeries.push(i);
            continue;
        }

        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }

    return fibonacciSeries;
}

// Do not edit below this line
module.exports = fibonacci;
