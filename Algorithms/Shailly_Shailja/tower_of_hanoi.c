#include<stdio.h>
#include<time.h>

void TOH(int n, int A, int B, int C)
{
	if(n>0)
	{
	TOH(n-1, A, C, B);
	printf("%d to %d\n", A, C);
	TOH(n-1, B, A, C);
	}
}

int main()
{
	clock_t start, end;
	double ex_time;
	
	int A=1; int B=2; int C=3;
	
	int n=3;
	
	start=clock();
	TOH(n, A, B, C);
	end=clock();
	
	ex_time=((double)(end-start))/CLOCKS_PER_SEC;
	
	printf("\nexecution time:%f\n", ex_time);
	
	
}
