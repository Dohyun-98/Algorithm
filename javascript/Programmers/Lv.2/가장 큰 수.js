function solution(numbers) {
  numbers = numbers
    .sort((a, b) => {
      const aresult = parseInt(a.toString() + b.toString());
      const bresult = parseInt(b.toString() + a.toString());
      return bresult - aresult;
    })
    .join("");
  if (numbers[0] === "0") return "0";
  const answer = String(numbers);
  return answer;
}
