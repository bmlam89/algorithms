/* function finds max sum where elements aren't adjacent to each other */
function max_sum(arr)
{
    if(arr.length==0)
    {
        return 0;
    }
    else if(arr.length==1)
    {
        return arr[0];
    }
    else
    {
        return Math.max(arr[0]+max_sum(arr.slice(2)),max_sum(arr.slice(1)));
    }
}

arr = [2,4,3,10,5,2,20];
var sum = max_sum(arr);
console.log(sum);