#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using ld = long double;
 
ll power(ll x, ll y); 
#define repp(I, A, B) for(int I = A; I <= B; I++)
#define rep(I, A, B) for(int I = A; I < B; I++)
#define rrep(I, B, A) for(int I = B; I >= A; I--)
#define pb emplace
#define ff first
#define ss second
#define all(v) v.begin(),v.end()
#define rall(v) v.rbegin(),v.rend()
#define LB lower_bound
#define UB upper_bound
#define MP make_pair
#define mem(A, B) memset(A, B, sizeof(A));
#define mem0(A) memset(A, 0, sizeof(A));
#define quickio ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define debug(this) cerr<<"> "<<#this<<" : "<<this<<"\n"
#define bitcount(n) __builtin_popcountll(n)
#define in_edges(M) repp(I, 1, M){ll A, B; cin >> A >> B; v[A].pb(B), v[B].pb(A);}
#define in_edges2(M) repp(I, 1, M){ll A, B; cin >> A >> B; v[A].pb(B);}
#define endl "\n"
 
const ll MOD = 1000000007;
 
int main() //PointBlank's code ¯\_(ツ)_/¯
{
    int n;
    cin >> n;
    n++;
    set<pair<int, int> > res;
 
    repp(i, 0, 2*n){
        res.pb(2, i);
        if(i % 2 == 0) res.pb(1, i), res.pb(0, i);
        else{
            if(((i - 1)/2) % 2 == 0) res.pb(0, i);
        }
    }   
 
    repp(i, 2, 2*n){
        if(i % 2 == 0) res.pb(3, i), res.pb(4, i);
        else{
            if(((i + 1)/2) % 2 == 0) res.pb(4, i);
        }
    
    }
 
    n--;
    if(n & 1){
        res.erase(make_pair(0, 4 + (n-1)*2));
        res.erase(MP(1, 4 + (n-1)*2));
    }else{
        res.erase(MP(3, 4 + (n-1)*2));
        res.erase(MP(4, 4 + (n-1)*2));
    }
    cout << res.size() << endl;
    for(auto i: res) cout << i.ff << " " << i.ss << endl;
}
 
ll power(ll x, ll y)
{ 
    ll res = 1; x %= MOD;
    while(y > 0){if(y & 1) res = (res*x) % MOD; y = y>>1, x = (x*x) % MOD;} 
    return res; 
}
