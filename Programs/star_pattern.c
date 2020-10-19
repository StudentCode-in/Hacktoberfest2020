#include<iostream>
using namespace std;

int star(int n)
{
	if(n==0)
    	return 0;
    printf("*");
    n--;
    star(n);
}

int main()
{
    int n,i;
    cout<<" ENter and number for patern : ";
    cin>>n;
     for(i=1;i<=n;i++)
     {
         star(i);
         cout<<"\n";
     }
     return 0;
}
