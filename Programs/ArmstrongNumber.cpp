#include <bits/stdc++.h>
using namespace std;

int main() {
   int num, sum = 0, digit = 0;
   cin>>num;
   int temp = num;
   while ( temp!=0){
      digit = temp % 10;
      sum = sum +(digit * digit * digit);
      temp = temp/10;
   }
   
   if(sum == num)
      cout<<num<<" is an Armstrong number.";
   else
      cout<<num<<" is not an Armstrong number.";

   return 0;
}
