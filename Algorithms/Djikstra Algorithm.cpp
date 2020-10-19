//The idea is to use dp in previously calculated distance and greedy approach in calculating city nearest ot given city
//The number of not yet finalised vertices changes everytime so we use min heap to extract minimum at each level and update easily
#include<bits/stdc++.h>
using namespace std;

vector <int> dijkstra(vector<vector<int>> , int ,int );

int printSolution(vector <int> dist, int n)
{
  
   for (int i = 0; i < n; i++)
      printf("%d ", dist[i]);
  
}
int main()
{
    int t;
    int V;
    cin>>t;
    while(t--){
        cin>>V;
        
        vector<vector<int>> g(V);
        
        for(int i = 0;i<V;i++){
            vector<int> temp(V);
            g[i] = temp;
        }
        
        for(int i=0;i<V;i++)
        {
      	    for(int j=0;j<V;j++)
      	    {
      		    cin>>g[i][j];
      	    }
        }
        
        int s;
        cin>>s;
        
        vector <int> res = dijkstra(g, s, V);
        printSolution (res, V);
        cout<<endl;
       }
        return 0;
}// } Driver Code Ends


/*  Function to implement Dijkstra
*   g: vector of vectors which represents the graph
*   src: source vertex to start traversing graph with
*   V: number of vertices
*/
/*struct mycomp
{
bool operator()(const pair<int,int> &p1,const pair<int,int> &p2)
{
    return p1.first<p2.first;
}
};*/
vector <int> dijkstra(vector<vector<int>> g, int src, int V)
{
    vector<int>ans(V);
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>pq;
     
    //visited array is created to keep a track of the elements already included in MSP
    int visited[V+1]={0};   
    ans[src]=0;
     for(int i=0;i<V;i++)
    {
        if(i!=src)
        {
        ans[i]=INT_MAX;
        }
    }  
    pq.push({0,src});
    while(!pq.empty())
    {
        
        int ver=pq.top().second;
        visited[ver]=1;
        pq.pop();
        for(int x=0;x<V;x++)
        {
            if(!visited[x]&&g[ver][x]&&ans[x]>ans[ver]+g[ver][x])
            {
                ans[x]=ans[ver]+g[ver][x];
                pq.push({ans[x],x});
            }    
        }
        
    }
    return ans;
    // Your code here
}
