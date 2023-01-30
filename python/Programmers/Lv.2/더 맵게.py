# import heapq 

# def solution(scoville, K):
#     answer = 0
#     heapq.heapify(scoville)
#     result = 0
#     while scoville[0] < K :
#         if len(scoville) == 1 :
#             return -1
#         v1 = heapq.heappop(scoville)
#         v2 = heapq.heappop(scoville)
#         result = v1 + (v2 * 2)
#         heapq.heappush(scoville,result)
#         answer += 1
        
        
#     return answer

import heapq
def solution(scoville,K):
    answer = 0
    heapq.heapify(scoville)
    while True:
        min1 = heapq.heappop(scoville)
        if min1 >= K:
            break
        elif len(scoville) == 0:
            answer = -1
            break
        min2 = heapq.heappop(scoville)
        new_scoville = min1 + min2 * 2
        heapq.heappush(scoville,new_scoville)
        answer += 1

    return answer
