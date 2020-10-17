//Program to find last digit of sum of fibonacci series
#include<bits/stdc++.h>
#define ll long long 
using namespace std;

int fibonacci_sum_fast(ll n){
    n=n%60;
    vector<int> f(n+1);
    f[0]=0;
    f[1]=1;
    int sum=0;
    for (ll  i = 1; i <=n; i++)
    {
        if(i==1)sum+=f[i];
        else{
            f[i]=(f[i-1]+f[i-2])%10;
            sum=(sum+f[i])%10;
        }
    }
    return sum;
    
}

int main() {
    long long n = 0;
    std::cin >> n;
    std::cout << fibonacci_sum_fast(n);
}
