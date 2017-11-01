function factorial(val)
{
    if(val==0)
    {
        return 1
    }
    return factorial(val-1)*val;
}
x = factorial(5)
console.log(x);