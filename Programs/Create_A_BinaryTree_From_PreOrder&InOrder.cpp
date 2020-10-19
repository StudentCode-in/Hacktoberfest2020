#include<iostream>
using namespace std;

class node{
public:
    int data;
    node* left;
    node* right;

    node(int d)
    {
        data=d;
        left=right=NULL;
    }
};

node* createTreeFromTrav(int in[],int pre[],int s,int e)
{
    static int i=0;
    //base case
    if(s>e)
    {
        return NULL;
    }

    node* root=new node(pre[i]);
    int index=-1;
    for(int j=s;s<=e;j++)
    {
        if(in[j]==pre[i])
        {
            index=j;
            break;
        }
    }

    i++;
    root->left=createTreeFromTrav(in,pre,s,index-1);
    root->right=createTreeFromTrav(in,pre,index+1,e);

    return root;


}
void preorder(node* root)
{
    if(root==NULL)
    {
        return;
    }
    cout<<root->data<<" ";
    preorder(root->left);
    preorder(root->right);
}
int main(){
    int in[] = {3,2,8,4,1,6,7,5};
    int pre[] = {1,2,3,4,8,5,6,7};
    int n = sizeof(in)/sizeof(int);

    node*root = createTreeFromTrav(in,pre,0,n-1);
    
    preorder(root);
return 0;
}
