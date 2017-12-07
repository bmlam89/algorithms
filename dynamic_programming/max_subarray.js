/*method prints out the sum of the largest summed subarray*/
function max_subarray(nums){
    var max = -999999999999999; var current_max = 0;
    for(var num of nums){
        current_max = Math.max(num,current_max+num);
        max = Math.max(max,current_max);
    }
    return max;
}

var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(max_subarray(nums)); //prints out 6