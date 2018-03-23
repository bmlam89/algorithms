#include <stdio.h>
#include <string.h>
#include <stdlib.h>



char* to_lower(char *str){
    char *str2 = malloc(strlen(str)+1);
    strcpy(str2,str);
    for(int i = 0; i < strlen(str2); i++){
        if( (str2[i] >= 'A') && (str2[i] <= 'Z')){
            str2[i] = str2[i] + 32;
        }
    }
    free(str2);
    return str2;
}
int main ()
{
  char *test = "String";
  char *lower = to_lower(test);
  for(int i = 0; i < strlen(lower); i++){
      printf("%c",lower[i]);
  }
  printf("\n");
}