/*converts a roman numeral string to an integer*/
var romanToInt = function(s) {
    /*vals are denominations of roman numeral*/
    var vals = {'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1};
    var i = 0;
    var res = 0;
    while(i < s.length){
        /*look at current value*/
        var val1 = vals[s[i]];
        /*if there is another value next to it check to see if it's bigger than current value*/
        if(i+1<s.length){

            
            var val2 = vals[s[i+1]];
            /*if current value is greater or equal to next value, just add current value to result*/
            if(val1>=val2){
                res += val1;
                i++;
            /*if next value is bigger than current, than result is added to current result + second value - current value*/    
            }else{
                res = res + val2 - val1;
                i+=2;
            }
        }else{
            res += val1;
            i++;
        }
        
    }
    return res;
}
