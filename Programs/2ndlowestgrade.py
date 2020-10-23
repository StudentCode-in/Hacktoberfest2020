#Take number of students from user 
#take name and score of each student in separate Line
#print 2nd lowest grade student name as a output

d={} #declaring empty dictionary
n =int(input("Enter the no of student"))
for i in range(n):
        name=input()
        grade=float(input())
        d[name]=grade    #assigning name as key and grade as a value    
v=d.values()    #
list=sorted(list(set(v)))[1]   #remove duplicate grades and change it to list ,sorting in ascending order
mylist=[] #declare empty list
for key, value in d.items():  #this loop helps to create list
        if value == list:
                mylist.append(key)
mylist.sort() #sort the list
for name in mylist:   #going through all grades to get second lowest grades
        print ("final ans",name)

