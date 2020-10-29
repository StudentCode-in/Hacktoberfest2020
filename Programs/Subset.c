// C program to check if an array is a subset of another array

#include<bits/stdc++.h>

bool isSubset(int arr1[], int arr2[],
int m, int n)
{
int i = 0;
int j = 0;
for (i = 0; i < n; i++)
{
for (j = 0; j < m; j++)
{
if(arr2[i] == arr1[j])
break;
}

if (j == m)
return 0;
}

return 1;
}

int main()
{
int m,n;
printf(“\nEnter the size of array 1 : “);
scanf(“%d”, &m);
printf(“\nEnter the size of array 2 : “);
scanf(“%d”, &n);
int arr1[m],arr2[n];
int i;
printf(“\nEnter the array 1 elements : “);
for(i=0;i<m;i++)
{
scanf(“%d”,&arr1[i]);
}
printf(“\nEnter the array 2 elements : “);
for(i=0;i<n;i++)
{
scanf(“%d”,&arr2[i]);
}

if(isSubset(arr1, arr2, m, n))
printf(“\nArray2 is a subset of Array1\n “);
else
printf(“\nArray2 is not a subset of Array1\n”);

getchar();
return 0;
}

