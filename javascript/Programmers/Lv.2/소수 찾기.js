// 소수 찾기
// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
function solution(numbers) {
  let answer = 0;

  const n = numbers.split("");
  const nums = new Set();
  function combination(combi, others) {
    console.log(combi, others);
    // combi 가 "" 일경우는 추가하지 않는다.
    if (combi > 0 && !nums.has(Number(combi)) && Number(combi) > 1) {
      // 현재 조합을 Set에 추가한다.
      let isPri = true;
      nums.add(Number(combi));
      for (let i = 2; i * i <= Number(combi); i++) {
        if (Number(combi) % i === 0) {
          isPri = false;
          break;
        }
      }
      if (isPri) answer++;
    }
    // 남은 숫자중 하나를 더하여 새로운 조합을 추가한다.
    for (let i = 0; i < others.length; i++) {
      // 깊은 복사
      let tmp = others.slice();
      tmp.splice(i, 1);
      combination(combi + others[i], tmp);
    }
  }
  combination("", n);
  return answer;
}
