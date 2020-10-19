#include<stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int mat[n][n],i,j;
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&mat[i][j]);
        }
    }
    for(j=0;j<n;j++)
    {
        for(i=n-1;i>=0;i--)
        {
            printf("%d ",mat[i][j]);
        }
        printf("\n");
    }


    return 0;
}
