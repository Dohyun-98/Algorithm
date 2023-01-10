function solution(routes) {
  var answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  console.log(routes);
  let preCam = -30001;
  for (let i = 0; i < routes.length; i++) {
    if (preCam < routes[i][0]) {
      answer++;
      preCam = routes[i][1];
    }
    if (preCam > routes[i][1]) {
      preCam = routes[i][1];
    }
  }
  return answer;
}
