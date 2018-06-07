#include <iostream>
using namespace std;

void swap(int *xp, int *yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

int partition(int arr[], int low, int high){
    int pivot = arr[high];
    int i = low-1;
    for (int j = low; j <= high- 1; j++)
    {
        
        if (arr[j] <= pivot)
        {
            i++; //this moves the wall to the right
            swap(&arr[i], &arr[j]); //swapping item closest to wall with item smaller than pivot
        }
    }
    swap(&arr[i + 1], &arr[high]); //swapping item at the wall with pivot to update pivot
    return (i + 1);
}

void quicksort(int arr[], int low, int high){
    if(low < high){
        int p_idx = partition(arr,low,high);
        quicksort(arr,low,p_idx-1);
        quicksort(arr,p_idx+1, high);
    }
}

void print(int arr[], int len){
    int i;
    for(i = 0; i < len; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(){
    int arr[] = {6,5,3,1,8,7,2,4,-10,11,-9};
    quicksort(arr,0,10);
    print(arr,11);
}