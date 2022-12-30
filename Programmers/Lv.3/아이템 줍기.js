function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  const map = Array.from({ length: 103 }, () =>
    Array.from({ length: 103 }, () => 0)
  );

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  let dobuleRec = rectangle.map((rec) => rec.map((point) => point * 2));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  dobuleRec.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (map[i][j] === 0) map[i][j] = 1;
        } else {
          map[i][j] = 2;
        }
      }
    }
  });
  map[characterX][characterY] = 0;
  const que = [];
  que.push([characterX, characterY, 0]);
  while (que.length) {
    const [x, y, cnt] = que.shift();
    if (x === itemX && y === itemY) return cnt / 2;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (map[nx][ny] === 1) {
        map[nx][ny] = 0;
        que.push([nx, ny, cnt + 1]);
      }
    }
  }
  return answer;
}
