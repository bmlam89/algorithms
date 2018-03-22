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
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
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