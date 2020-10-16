//program to find last digit of fibonacci series
#include <bits/stdc++.h>
using namespace std;

int get_fibonacci_last_digit_fast(int n){
    vector<int> f(n+1);
    f[0]=0;
    f[1]=1;
    int i;
    for (i = 2; i <= n; i++)
    {
        f[i]=(f[i-1]+f[i-2])%10;
    }
    return f[n];
    
}

int main() {
    int n;
    std::cin >> n;
    int c = get_fibonacci_last_digit_fast(n);
    std::cout << c << '\n';
    }
