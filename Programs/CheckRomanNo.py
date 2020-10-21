#validate given no is roman no or not
import re
#n=input()
#r1=re.compile(n)
thousand='M{0,3}'
hundred='(C[DM]|D?C{0,3})'
ten='(X[LC]|L?X{0,3})'
digit='(I[VX]|V?X{0,3})'
num=re.match(thousand+hundred+ten+digit+'$',input())
if num:
        print("Valid Roman Number")
else:
        print("Not Valid Roman Number")

