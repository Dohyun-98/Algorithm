def solution(maps):
    answer = []
    dx = [0,0,1,-1]
    dy = [1,-1,0,0]
    for i,m in enumerate(maps):
        maps[i] = [k for k in m]
    for i,m in enumerate(maps):
        for j,n in enumerate(m):
            que = []
            tmp = 0
            if n != 'X':
                que.append([i,j,n])
                maps[i][j] = 'X'
            while que:
                length = len(que)
                for k in range(length):
                    [x,y,cost] = que.pop(0)
                    tmp += int(cost)
                    for u in range(4):
                        nx = x + dx[u]
                        ny = y + dy[u]
                        if nx >= 0 and nx < len(maps) and ny >= 0 and ny < len(maps[nx]) and maps[nx][ny] != 'X':
                            que.append([nx,ny,maps[nx][ny]])
                            maps[nx][ny] = 'X'
            if tmp != 0 :
                answer.append(tmp)
    if len(answer) > 0:
        answer.sort()
    else:
        answer.append(-1)
    return answer