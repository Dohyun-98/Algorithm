function solution(n, stations, w) {
  var answer = 0;
  // console.log(map)
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  if (n === w && stations.length > 0) return 1;
  let start = 1;
  let end;
  for (let i = 0; i < stations.length; i++) {
    end = stations[i] - w - 1;
    const s = stations[i] + w + 1 > n ? n + 1 : stations[i] + w + 1;
    answer += Math.ceil((end - start + 1) / (w * 2 + 1));
    start = s;
  }

  end = n;
  if (start <= end) {
    if (end === start) answer++;
    else answer += Math.ceil((end - start + 1) / (w * 2 + 1));
  }

  return answer;
}
