import heapq 

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    result = 0
    while scoville[0] < K :
        if len(scoville) == 1 :
            return -1
        v1 = heapq.heappop(scoville)
        v2 = heapq.heappop(scoville)
        result = v1 + (v2 * 2)
        heapq.heappush(scoville,result)
        answer += 1
        
        
    return answer