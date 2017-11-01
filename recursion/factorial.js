function factorial(val)
{
    /* base case is 0! = 1 */
    if(val==0)
    {
        return 1
    }
    return factorial(val-1)*val;
}
x = factorial(5)
console.log(x);