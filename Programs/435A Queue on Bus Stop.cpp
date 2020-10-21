//Author Tejas K Mukherjee
#include<bits/stdc++.h>
using namespace std;
#define ll long long 
#define FOR(a,b) for(int i=a;i<b;i++)
#define FORE(a,b) for(int i=a;i<=b;i++)
int main()
{
    int n,m;
    cin>>n>>m;
    int a[n];
    FOR(0,n)
    {
        cin>>a[i];
    }
    int s = 0;
    int bus =1;
    FOR(0,n)
    {
        s+=a[i];
        if (s>m)
        {
            bus++;
            s=0;
            i--;
        }
    }
    cout<<bus;
}