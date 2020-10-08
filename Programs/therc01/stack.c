#include<stdio.h>
#include<stdlib.h>

struct stack
{
    int info;
    struct  stack *next;    
};
typedef struct stack stack;
stack *top = NULL;
int count = 0;
int push(){
    stack *temp;
    temp = (stack*)malloc(sizeof(stack));
    printf("Enter the value");
    scanf("%d",&temp->info);
    temp->next = top;
    top = temp;
    count++;
    return(top);
};
int pop(stack * top){
    stack *ptr;
    ptr = top;
    int item;
    if(top == NULL){
        printf("Empty stack");
    }
    else
    {
        while(top!= NULL){
            top = top->next;
        }
        item = top->info;
        count--;
        printf("Item poped %d\n",item);      
    }
    return(top);
};
void display(stack*top){
    stack *ptr;
    ptr = top;
    int lop;
    if(count == 0){
        printf("Empty stack");
    }
    else{
        lop = count;
        printf("Stack is:");
        while(lop != 0){
                 
            printf("\n Number is %d",ptr->info);
            ptr = ptr->next;
            lop--;
        }
    }
    
};
void main(){
    int a = 0;
    while(a != 4){
        printf("\n1: Push operation");
        printf("\n2: POP operation");
        printf("\n3: Dislay stack");
        printf("\n4: Exit");
        printf("\nEnter the choice");
        scanf("%d",&a);
    
    
        switch (a)
        {
        case 1:
            push(top);
            display(top);
            break;
        case 2:
            pop(top);
            //display(top);
            break;
        case 3:
            display(top);
            break;
        default:
            break;
        }
    }
}