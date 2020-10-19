#include<iostream>
using namespace std;

class node
{
public:
    int data;
    node* next;

    node(int d)
    {
        data=d;
        next=NULL;

    }
};
void insertionAtTail(node*&head,node*&tail,int data)
{
    if(head==NULL)
    {
        node* n=new node(data);
        head=tail=n;
    }
    else
    {
        node* n=new node(data);
        tail->next=n;
        tail=n;
    }
}
void addList1(node*&head1,node*&tail1,int n)
{
    int data;
    while(n--)
    {
        cin>>data;
        insertionAtTail(head1,tail1,data);
    }

}
void addList2(node*&head2,node*&tail2,int m)
{
    int data;
    while(m--)
    {
        cin>>data;
        insertionAtTail(head2,tail2,data);
    }

}
node* merge(node* head1,node* head2)
{
    if(head1==NULL)
    {
        return head2;
    }
    else if(head2==NULL)
    {
        return head1;
    }

    node* c;
    if(head1->data<head2->data)
    {
        c=head1;
        c->next=merge(head1->next,head2);
    }
    else
    {

        c=head2;
        c->next=merge(head1,head2->next);

    }
    return c;

}
void print(node* head)
{
    while(head!=NULL)
    {
        cout<<head->data<<" ";
        head=head->next;
    }

}


int main()
{

    node* head1=NULL;
    node* tail1=NULL;
    node* head2=NULL;
    node* tail2=NULL;
    int t;
    cin>>t;
    while(t--)
    {
       int n,m;
       cin>>n;
       addList1(head1,tail1,n);
       cin>>m;
       addList2(head2,tail2,m);

       node* head=merge(head1,head2);
       print(head);

    }
    return 0;
}
