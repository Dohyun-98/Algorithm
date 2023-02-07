def solution(book_time):
    answer = 0
    time = []
    book_time.sort(key=lambda x : x[0])
    for start,end in book_time:
        start_hour = int(start.split(':')[0])
        start_min = int(start.split(':')[1])
        start_time = start_hour * 60 + start_min
        
        end_hour = int(end.split(':')[0])
        end_min = int(end.split(':')[1])
        end_time = end_hour * 60 + end_min
        
        if not time:
            answer += 1
            time.append(end_time + 10)
            continue
        
        if min(time) <= start_time:
            time.remove(min(time))
        else:
            answer += 1
        time.append(end_time + 10)
    return answer