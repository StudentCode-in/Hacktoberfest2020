#This Program used to check your given number is valid or not using Re function##in python 


import re
num=input()
num1=len(str(num))
print (num1)
if num1 ==10:
	match=re.search(r'^[789]\d',num)
	print("Given number is valid")
else:
	print("Given Number is not valid")

