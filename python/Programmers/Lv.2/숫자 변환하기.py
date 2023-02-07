def solution(x, y, n):
    if x == y:
        return 0
    answer = 1
    tmp = [set([x+n,x*2,x*3])]
    while y not in tmp[-1]:
        tem = set()
        for x in tmp[-1]:
            tem.add(x + n)
            tem.add(x * 2)
            tem.add(x * 3)
        if min(tem) > y or min(tem) >= 1000001:
            return -1
        tmp.append(tem)
        answer += 1
    # print(tmp)
    return answer