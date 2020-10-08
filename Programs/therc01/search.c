#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node_type
{
  int info;
  struct node_type *next;
};

typedef struct node_type node;
void search(node *start)
{
  node *ptr, *loc;
  ptr=start;
  int item;
  printf("Enter value to search");
  scanf("%d",&item);
  while(ptr!=NULL)
  {
    if (ptr ->info == item)
        loc=ptr;
    else    
        ptr = ptr ->next;
   }
   if (loc == NULL)
      printf("Unsuccessful Search");
   else
      printf("Successful");
      printf("Value is %d",ptr->info);
}
node *create(node *start)
{
  node *temp;
  int item;
  puts("Enter the Value:");
  scanf("%d",&item);
  while(item!=-999)
  {
    temp=(node*)malloc(sizeof(node));
    temp ->info=item;
    temp ->next=start;
    start=temp;
    puts("Enter the Value:");
    scanf("%d",&item);
   }
   return(start);
}

void display(node *start)
{
  node *ptr;
  ptr=start;
  while(ptr!=NULL)
  {
    printf("%d ", ptr ->info);
	ptr = ptr ->next;
   } printf("\n");
}
node * start = NULL;
void main(){
    create(start);
    display(start);
    search(start);
}