function fibonacci(val)
{
    /* base case of fib is 0 and 1 */
    if(val==0) 
    {
        return 0;
    }
    else if(val==1)
    {
        return 1;
    }
    return fibonacci(val-1)+fibonacci(val-2);
}
console.log(fibonacci(6));