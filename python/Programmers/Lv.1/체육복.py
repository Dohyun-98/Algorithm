def solution(n,lost,reserve):
    u = [1] * (n + 2)
    for i in reserve:
        u[i] += 1
    for i in lost:
        u[i] -= 1
    for i in range(1,n+1):
        if u[i-1] == 0 and u[i] == 2:
            u[i -1 :  i+1] = [1,1]
        elif u[i] == 2 and u[i+1] == 0:
            u[i : i+2 ] = [1,1]
    return len([x for x in u[1:-1] if x > 0])

def solution(n,lost,reserve):
    # 체육복을 도난 당한 학생 파악
    s =  set(lost) & set(reserve)
    l = set(lost) - s
    r = set(reserve) - s
    for x in sorted(r):
        if x - 1 in l :
            l.remove(x - 1)
        elif x + 1 in l:
            l.remove(x + 1) 

    return n - len(l)

print('11'*3)
print('1'*3)
