#include <stdio.h>
#include <conio.h>

void display(int *);
void insert(int *, int, int);
void delete(int *, int);
void reverse(int *);
void bubblesort(int *);
void linearsearch(int *,int);
void binarysearch(int *, int);

int ub=5;

int main()
{
    int a[5], i, choice;
    
    for(i = 0; i < 5; i++)
    {
	printf("Enter a[%d]: ", i);
	scanf("%d", &a[i]);
    }

    printf("\nPrinting elements of the array: \n\n");
    

    display(a);
    
    printf("1. Insert an element in the Array");
    printf("2. Delete an element in the Array");
    printf("3. Reverse the Array");
    printf("4. Sort the Array");
    printf("5. Searching an element in the Array");
    printf("6. Exit") ;
   
    scanf("%d",&choice);
    switch(choice){
            case 1:
        {
        insert(a,4,18);
        display(a);
        break;
        }
        case 2:
        {
        delete(a,4);
        display(a);
        break;
        }
        case 3:
        {
        reverse(a);
        display(a);
        break;
        }
        case 4:
        { 
        bubblesort(a);
        display(a);
        break;
        }
        case 5:
        {
        linearsearch(a,18);
        display(a);
        break;
        }
        default:
        exit();
    }
    getch();
    return 0;
}

void display(int *a)
{
 int i;
 for (i=0;i<=ub-1;i++)
	printf('%d', a[i]);
  printf("\n");
}

void insert(int *a, int loc, int item)
{
  /* Shift elements towards right */
  int i=0;
  for(i=ub-1;i>loc-1;i--)
	a[i] = a[i-1];
  a[i]=item;
}

void delete(int *a, int loc)
{
  /* Shift elements towards left */
  int i;
  for(i=loc-1;i<ub;i++)
	a[i] = a[i+1];
  a[i]=0;
}

void reverse(int *a)
{
  int i, temp;
  for(i=0; i<ub/2;i++)
  {
    temp = a[i];
    a[i] = a[(ub-1)-i];
    a[(ub-1)-i] = temp;
   }
}

void bubblesort(int *a)
{
  int i,j,flag,temp;
  for(i=0; i<ub;i++)
  {
    for(j=0; j<ub-i-1;j++)
    {
      flag = 0;
      if (a[j]>a[j+1])
      {
	temp = a[j];
	a[j] = a[j+1];
	a[j+1] = temp;
	flag = 1;
      }
   }
   if (flag == 0)
       break;
 }
}

void linearsearch(int *a, int num)
{
  int i;
  for(i=0; i<ub;i++)
  {
    //printf("%d",i);
    if(a[i] == num)
    {

      printf(" The element %d is present at %dth position ", num, i+1);
      return;
   }
}
}

void binarysearch(int *a, int num)
{
  int first, last, middle;
  first=0;
  last=ub-1;
  middle=(first+last)/2;
  while (first<=last)
  {
     if (a[middle]<num)
        first=middle+1;
     else if (a[middle]==num)
      {
         printf('%d Location', middle+1);
         break;
      }
     else
          last = middle-1;
    middle=(first+last)/2;
    }
    if (first>last)
       printf('Search is Unsuccessful');
}
