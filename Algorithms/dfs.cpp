#include<iostream>
#include<vector>
using namespace std;

/*each first line of input has n node and m edges 
corresponding m lines contain node edge relation and llast line contains the head node
*/
// this program prints a single integer denoting the number of nodes that are unreachable from the given head node


vector <int> g[100005];
bool visited[100005];

int c=0;


void initialize()
{
    for(int i = 0; i<100005; i++){
        visited[i] = false;
    }
}

void dfs(int a)
{
    visited[a] = true;
    c++;
    int x = g[a].size();
    for(int i = 0; i < x; i++)
    {
        int x1 = g[a][i];
        if(visited[x1] == false){
            dfs(x1);
        }
    }
}



int main()
{
    int n, m;
    cin>>n>>m;
    for(int i = 0; i < m; i++)
    {
        int a,b;
        cin>>a>>b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    int x;
    cin>>x;
    initialize();
    dfs(x);

    cout<<n-c;
    return 0;
}