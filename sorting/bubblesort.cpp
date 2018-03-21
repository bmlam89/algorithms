#include <iostream>

using namespace std;

void swap(int *xp, int *yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void bubblesort(int arr[],int len){
    int i,j;

    for(i = 0; i < len; i++){
        for(j = 0; j < len - i; j++){
            if(arr[j] > arr[j+1]){
                swap(&arr[j], &arr[j+1]);
            }
        }
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
    int arr[] = {5, 1 , 4, 2, 8};
    print(arr,5);
    bubblesort(arr,5);
    print(arr,5);
}