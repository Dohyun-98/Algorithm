# O(N)
def solution(participant, completion):
    # 해시
    search = dict()
    
    for x in participant:
        search[x] = search.get(x,0) + 1
    for x in completion:
        search[x] -= 1
    tmp = [k for k,v in search.items() if v > 0]
    answer =  tmp[0]
    return answer

# O(NlogN)
# 정렬이 NlogN이므로
def solution(participant, completion):
    participant.sort()
    completion.sort()
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i]
    return participant[-1]



from itertools import accumulate

def solution(bell):
    coors_start = {}
    coors_end = {}
    for i, x in enumerate(accumulate([0] + [-1 if b == 1 else 1 for b in bell])):
        print(x)
        if x not in coors_start:
            coors_start[x] = i
        coors_end[x] = i
    print(coors_start)
    print(coors_end)
    return max(coors_end[x] - coors_start[x] for x in coors_end)
  
print(solution([1, 2, 1, 1, 1, 2, 2,1]))