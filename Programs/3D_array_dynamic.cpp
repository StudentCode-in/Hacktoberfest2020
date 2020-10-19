#include<iostream>
using namespace std;

int main()
{
	int *p,x=1,y=2,z=3;
	p=new int(x*y*z);
	p[1] [1] [2]]=0;
	p[2]=5;
	cout<<p[1] [1] [2];
	delete [] p [x] [y] [z];
	return 0;
}
