#include <stdio.h>

int main(){
   const unsigned char *s1 ='A';
   s1++;
   printf("%d\n",*(const unsigned char*)s1);
}