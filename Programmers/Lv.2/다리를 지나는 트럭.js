function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  // 다리 길이 생각
  const bridge = Array.from({ length: bridge_length - 1 }, () => 0);
  // console.log(bridge)
  let m = 0;
  m += truck_weights[0];
  bridge.push(truck_weights.shift());
  answer++;
  while (m > 0) {
    // console.log(bridge,answer)
    const v = bridge.shift();
    // console.log(v)
    m -= v;
    if (m + truck_weights[0] <= weight && bridge.length <= bridge_length - 1) {
      m += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
    answer++;
  }

  return answer;
}
