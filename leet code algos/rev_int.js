/*leetcode algo, reverses a 32 bit signed int*/

function rev_int(num){
    var rev = 0; var temp = num;
    while(Math.abs(temp) >= 10){
        rev = rev * 10 + Math.abs(temp) % 10;
        temp = Math.floor(Math.abs(temp)/10);
    }
    rev = rev * 10 + temp;
    if(num < 0){
        rev *= -1;
    }
      
    if(num > 2147483647 || rev > 2147483647){
        rev = 0;
    }else if(num < -2147483647 || rev < -2147483647){
        rev = 0;
    }
    return rev;
}
var test = rev_int(123234234234);
console.log(test);