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

/*longest palindrome substring*/
/*inefficient implementation*/
function longest_palindrome(str){
    if(!str.length)
        return '';
    else if(str.length==1)
        return str;
    else{
        var pal = '';
        for(var i = 0; i < str.length; i++){
            var substr = str.slice(i,str.length);
            for(var j = str.length; j >= 0; j--){
                if(is_palindrome(substr)){
                    if(pal.length < substr.length){
                        pal = substr;
                    }
                }
                substr = substr.slice(i,j);
            }
        }
        return pal;
    }
}

console.log(longestPalindrome("asdfasfwt3g23gaaaaaaaaaaaaddaaaaaaaaaaabbbbbbbbaaaaaaaaaaaaaaaaaaaaaweaogiae;gjha"));
