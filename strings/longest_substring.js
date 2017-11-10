
/*brute force*/
function longest_substring(str)
{
    var max = 0; count = 0;
    
    for(var i = 0; i < str.length; i++){
        var count = 0;
        var seen = {}
        for(var j = i;j<str.length;j++){
            /*if character hasn't been seen, increment count and mark character as seen*/
            if(!seen[str[j]]){
                seen[str[j]]=true;
                count++;
            }else{
                /*once duplicate has been found, set max to max of max and count and break inner loop*/
                max = Math.max(max,count);
                break;
            }
        }
    }
    /* just in case the string is made entirely of unique characters */
    max = Math.max(max,count);
    return max;
}



/*efficient genius method*/
function longest_substring2()
{
    var i = 0; j = 0; max = 0;
    var set = new Set();
    
    while(j < s.length){
        /*if character hasn't been seen, add to the set and take max of max and size of the set*/
        if(!set.has(s[j])){
            set.add(s[j++]);
            max = Math.max(max,set.size);
        }else{

            /*once duplicate is found, we want to remove characters until we've removed the duplicate character*/
            /*reason being is because we want to give characters before the duplicate a chance to be counted again as 
            part of the longest substring*/
            set.delete(s[i++]);
        }
    }
    return max;
};