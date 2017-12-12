/*method implements in-place removal of a specified value from given array*/
var len = function(arr,val){
    var i = 0; var j = arr.length;
    while(i < j){
        if(arr[i] == val){
            arr[i] = arr[j-1]; 
            j--;
        }else{
            i++;
        }
    }return i;
}

console.log(len([3,2,2,3],3));