def solution(participant, completion):
    # 해시
    search = dict()
    
    for x in completion:
        if not search.get(x):
            search[x] = 1
        else :
            search[x] = search[x] + 1 
            
    for x in participant:
        if not search.get(x):
            return x
        else:
            if search.get(x) == 1:
                del search[x]
            else:
                search[x] -= 1
            