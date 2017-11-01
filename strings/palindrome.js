function is_palindrome(string)
{
    for(var i = 0; i < Math.floor(string.length/2);i++)
    {
        if(string[i] != string[string.length-1-i])
        {
            return false;
        }
    }
    return true;
}

console.log(is_palindrome("racecar"));

/* inplace palindrome checker while dealing with white spaces */
function is_palindrome2(string)
{
    var i = 0;
    var j = string.length-1;
    while(i<j)
    {
        if(string[i]==" ")
        {
            i++;
        }
        else if(string[j]==" ")
        {
            j--;
        }
        else if(string[i] != string[j])
        {
            return false;
        }
        else
        {
            i++;
            j--;
        }
    }
    return true;
}
console.log(is_palindrome2("  rac   e      c  a r    e  r "));
console.log(is_palindrome2("  rac   e      c  a r    "));