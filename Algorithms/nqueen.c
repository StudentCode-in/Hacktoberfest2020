#include<stdio.h>
#include<math.h>
int x[20], c = 0;

void print(int n, int c)
{
	int i, j;
	printf("\n\nSolution %d\n", c);
	for(i=1; i<=n; i++)
	{
		for(j=1; j<=n; j++)
		{
			if(x[i] == j)
				printf("\tQ");
			else
				printf("\t-");
		}
		printf("\n\n");
	}
}

int place(int k, int i)
//k : Queen no
//i : the proposed column
{
	int j;
	for(j=1; j<=k-1; j++)
	{
		if(x[j] == i)
			return 0;
		else 
			if(abs(x[j]-i) == abs(j-k))
				return 0;
	}
	return 1;
}

void nqueen(int k, int n)
{
	int i;
	for(i=1; i<=n; i++)
	{
		if(place(k, i))
		{
			x[k] = i;
			if(k == n)
			{
				print(n, ++c);
			}
			else
				nqueen(k+1, n);
		}
	}
}

int main()
{
	int n;
	printf("\nPlease enter the total number of queens\n");
	scanf("%d", &n);
	nqueen(1, n);
	return 0;
}
