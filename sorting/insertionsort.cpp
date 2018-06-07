#include <iostream>
using namespace std;


void insertionsort(int arr[], int len){
    int i,j,current;
    for(i = 1; i < len; i++){
        current = arr[i];
        j = i-1;

        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
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
    int arr[] = {6,5,3,1,8,7,2,4};
    int len = 8;
    insertionsort(arr,len);
    print(arr,len);
}