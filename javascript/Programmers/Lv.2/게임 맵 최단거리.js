function solution(maps) {
  var answer = 1;
  let n = maps.length;
  let m = maps[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let queue = [];

  queue.push([0, 0]);
  maps[0][0] = 0;

  while (queue.length > 0) {
    let v = queue.length;

    for (let i = 0; i < v; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < dx.length; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            return ++answer;
          }

          maps[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}
