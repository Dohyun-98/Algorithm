function solution(game_board, table) {
  var answer = -1;
  const block = [];
  const puzzle = [];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  // 모양이 같다????
  // 도형 모양을 bfs, dfs로 적출
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      let bk = [];
      if (table[i][j] === 1) {
        const que = [];
        table[i][j] = 0;
        que.push([i, j]);
        while (que.length) {
          const length = que.length;
          for (let k = 0; k < length; k++) {
            const [x, y] = que.shift();
            bk.push([x, y]);
            for (let e = 0; e < 4; e++) {
              const nx = x + dx[e];
              const ny = y + dy[e];
              if (
                nx >= 0 &&
                ny >= 0 &&
                nx < table.length &&
                ny < table[nx].length &&
                table[nx][ny] === 1
              ) {
                table[nx][ny] = 0;
                que.push([nx, ny]);
              }
            }
          }
        }
        block.push(bk);
      }

      bk = [];
      if (game_board[i][j] === 0) {
        const que = [];
        game_board[i][j] = 1;
        que.push([i, j]);
        while (que.length) {
          const length = que.length;
          for (let k = 0; k < length; k++) {
            const [x, y] = que.shift();
            bk.push([x, y]);
            for (let e = 0; e < 4; e++) {
              const nx = x + dx[e];
              const ny = y + dy[e];
              if (
                nx >= 0 &&
                ny >= 0 &&
                nx < game_board.length &&
                ny < game_board[nx].length &&
                game_board[nx][ny] === 0
              ) {
                game_board[nx][ny] = 1;
                que.push([nx, ny]);
              }
            }
          }
        }
        puzzle.push(bk);
      }
    }
  }
  console.log(block, puzzle);

  return answer;
}

const game_board = [
  [1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0],
];
const table = [
  [1, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0],
];
console.log(solution(game_board, table));
