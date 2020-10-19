#include<stdio.h>

int main()
{

    int m,n;
    scanf("%d%d",&m,&n);
    int *ptr1=(int*)malloc((m*n)*sizeof(int));
    int *ptr2=(int*)malloc((m*n)*sizeof(int));
    for(int i=0;i<m*n;i++)
        scanf("%d",(ptr1+i));
    for(int i=0;i<m*n;i++)
       scanf("%d",(ptr2+i));

       for(int i=0;i<m*n;i++)
       {
           if (!((i%n)==(n-1)))printf("%d ",*(ptr1+i)+*(ptr2+i));
           if(i%n==(n-1)) printf("%d \n",*(ptr1+i)+*(ptr2+i));
       }




    return 0;
}
