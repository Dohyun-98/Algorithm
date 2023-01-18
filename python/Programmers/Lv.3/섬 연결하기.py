# 탐욕법
def getParent(parent,x):
    if parent[x] == x:
        return x
    return getParent(parent,parent[x])

def unionParent(parent,x,y):
    a = getParent(parent,x)
    b = getParent(parent,y)
    if a > b :
        parent[a] = b
    else :
        parent[b] = a
        
def compareParent(parent,x,y):
    a = getParent(parent,x)
    b = getParent(parent,y)
    if a == b:
        return 1
    else :
        return 0
    
def solution(n, costs):
    answer = 0
    parent = [k for k in range(0,n)]
    count = 0
    
    for a,b,c in sorted(costs,key = lambda x:x[2]):
        if not compareParent(parent,a,b):
            unionParent(parent,a,b)
            answer += c
            count += 1
        if count == n-1:
            break
    return answer
    