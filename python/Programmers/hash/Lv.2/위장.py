def solution(clothes):
    answer = 1
    clo = dict()
    for x in clothes:
        if not clo.get(x[1]):
            clo[x[1]] = 1
        else :
            clo[x[1]] += 1
    
    for x in clo.values():
        answer *= x+1
    return answer -1