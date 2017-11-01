function is_permutation(string1,string2)
{
    /* edge case */
    if(string1.length != string2.length)
    {
        return false;
    }

    /* store characters of string1 as keys, and the number of occurrences as values */
    var dict = {};
    for(let char of string1)
    {
        if(!(char in dict))
        {
            dict[char] = 1;
        }
        else
        {
            dict[char]++;
        }
    }

    /* iterate through string2 and decrement the values of the dict variable */
    for(let char of string2)
    {
        /* if char of string2 isn't a key in dict, permutation is false */
        if(!(char in dict))
        {
            return false;
        }
        else
        {
            /* decrement the value of dict[char] and check that it doesn't go below 0 */
            if(dict[char]-- < 0)
            {
                return false;
            }
        }
        
    }
    return true;
}

console.log(is_permutation("string","gstirn"));