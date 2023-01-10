// 미해결..

// // 15 , 17, 19, 20, 21 통과 나머지 시간초과!
// function solution(beginning, target) {
//   var answer = Number.MAX_SAFE_INTEGER;
//   const isGone = Array.from({ length: beginning.length }, () =>
//     Array.from({ length: beginning[0].length }, () => 0)
//   );
//   let n = beginning.length;
//   let m = beginning[0].length;
//   const dx = [0, 0, 1, -1];
//   const dy = [1, -1, 0, 0];
//   // DFS 문제
//   // 모든 경우의 수가 맞는거 같음...
//   function DFS(x, y, beginning, cnt) {
//     let isTrue = true;
//     for (let i = 0; i < beginning.length; i++) {
//       for (let j = 0; j < beginning[i].length; j++) {
//         if (beginning[i][j] !== target[i][j]) {
//           isTrue = false;
//           break;
//         }
//       }
//     }
//     if (isTrue) {
//       answer = Math.min(answer, cnt);
//     } else {
//       for (let i = 0; i < 4; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];
//         if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
//           let k = compare(beginning, target, nx, ny);
//           if (isGone[nx][ny] === 0 && k === 2) {
//             isGone[nx][ny] = 1;
//             DFS(nx, ny, columnReverse(beginning, ny), cnt + 1);
//             isGone[nx][ny] = 0;
//           }
//           if (isGone[nx][ny] === 0 && k === 1) {
//             isGone[nx][ny] = 1;
//             DFS(nx, ny, rowReverse(beginning, nx), cnt + 1);
//             isGone[nx][ny] = 0;
//           }
//           if (isGone[nx][ny] === 0 && k === 3) {
//             isGone[nx][ny] = 1;
//             DFS(nx, ny, beginning, cnt);
//             isGone[nx][ny] = 0;
//           }
//         }
//       }
//     }
//   }

//   isGone[0][0] = 1;
//   DFS(0, 0, beginning, 0);

//   if (answer === Number.MAX_SAFE_INTEGER) return -1;
//   return answer;
// }

// function rowReverse(map, n) {
//   const copy = JSON.parse(JSON.stringify(map));

//   for (let i = 0; i < copy[n].length; i++) {
//     if (copy[n][i] === 0) copy[n][i] = 1;
//     else copy[n][i] = 0;
//   }
//   return copy;
// }
// function columnReverse(map, n) {
//   const copy = JSON.parse(JSON.stringify(map));
//   for (let i = 0; i < copy.length; i++) {
//     if (copy[i][n] === 0) copy[i][n] = 1;
//     else copy[i][n] = 0;
//   }
//   return copy;
// }

// function compare(map, target, x, y) {
//   let cnt1 = 0;
//   let cnt2 = 0;
//   for (let i = 0; i < map[x].length; i++) {
//     if (map[x][i] === target[x][i]) cnt1++;
//   }
//   for (let i = 0; i < map.length; i++) {
//     if (map[i][y] === target[i][y]) cnt2++;
//   }
//   if (cnt1 === cnt2) return 3;
//   else if (cnt1 > cnt2) return 2;
//   else return 1;
// }

const getCopiedBoard = (board) => {
  return JSON.parse(JSON.stringify(board));
};

function reverseColumn(board, idx) {
  for (let i = 0; i < board.length; i += 1) {
    board[i][idx] = +!board[i][idx];
  }
}

function deepEqual(target, board) {
  return JSON.stringify(target) === JSON.stringify(board);
}

function check(board, target, col) {
  let flag = false;

  for (let row = 0; row < board.length; row += 1) {
    if (board[row][col] !== target[row][col]) {
      flag = true;

      break;
    }
  }

  return flag;
}

const solution = (beginning, target) => {
  let result = Infinity;

  const rowLength = beginning.length;
  const colLength = beginning[0].length;

  const rowCases = 1 << rowLength; // 0이면 뒤집지 말고, 1이면 뒤집어라!
  console.log(rowCases, "rowCases");
  console.log(rowLength, "rowLength");
  for (let bit = 0; bit < rowCases; bit += 1) {
    let reverseCount = 0;
    // board를 복사해줘야 한다.
    const board = getCopiedBoard(beginning);

    for (let row = 0; row < rowLength; row += 1) {
      const nowRowBit = 1 << row;

      if (!(nowRowBit & bit)) {
        board[row] = board[row].map((v) => +!v);
        reverseCount += 1;
      }
    }

    for (let col = 0; col < colLength; col += 1) {
      const shouldReverse = check(board, target, col);

      if (shouldReverse) {
        reverseColumn(board, col);
        reverseCount += 1;
      }
    }

    if (deepEqual(target, board)) {
      result = Math.min(result, reverseCount);
    }
  }

  return result === Infinity ? -1 : result;
};

const beginning = [
  [0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
];
const target = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
];

console.log(solution(beginning, target));
