// C program to find all symmetric pairs in an array

#include <stdio.h>

void symmetric_array_pair(int arr1[], int arr2[], int m, int n)
{
int i,j;
for(i=0;i<m;i++)
{
for(j=0;j<m;j++)
{
if(arr1[i] == arr2[j] && arr1[j]== arr2[i])
{
printf("(%d,%d)\t",arr1[i],arr1[j]);
continue;
}
}
}
}

int main()
{
int m,n;
scanf("%d%d",&m,&n);
int i,j;
int arr1[m],arr2[n];

for(i=0;i<m;i++)
{
scanf("%d",&arr1[i]);
}

for(i=0;i<m;i++)
{
scanf("%d",&arr2[i]);
}

symmetric_array_pair(arr1,arr2,m,n);

return 0;
}
