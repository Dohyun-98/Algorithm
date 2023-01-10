def solution(genres, plays):
    answer = []
    # 필요한 정보
    # 장르별 우선 순위
    # 장르속에서 곡 재생횟수
    gen = dict()
    for i in range(len(genres)):
        if not gen.get(genres[i]):
            gen[genres[i]] = plays[i]
        else :
            gen[genres[i]] = gen[genres[i]] + plays[i]
    print(gen)
    chart = list()
    for i in range(len(plays)):
        chart.append([plays[i],gen.get(genres[i]),i])
        
    chart = sorted(chart,key = lambda x:(-x[1],-x[0],x[2]))
    cur = 0
    count = 0
    temp = []
    for x in chart:
        if cur == x[1]:
            count += 1
        else:
            cur = x[1]
            count = 1
        if count >= 3:
            temp.append(x[2])

    for x in chart:
        if x[2] not in temp:
            answer.append(x[2])
    return answer

