#Program to find minimum cost from 0,0 to x,y given the cost matrix
import sys 

def minCost(cost, m, n):
    if (n < 0 or m < 0):
        return sys.maxsize
    elif (m == 0 and n == 0):
        return cost[m][n]
    else:
        return cost[m][n] + min(minCost(cost, m-1, n-1),
                                minCost(cost, m-1, n),
                                minCost(cost, m, n-1))

# Driver program to test above functions
m = int(input('Number of rows: '))
n = int(input('Number of columns: '))

cost = []
print('Enter the values of the matrix with space seperated')
for i in range(m):
    cost.append(list(map(int,input().split())))

print('Enter row and column coordinate you want to go')

x = int(input())
y = int(input())

print(minCost(cost, x-1, y-1))
