function solution(want , number, discount) {
    var answer = 0;
    let index = 0;
    let list = [];
    for(let i=0;i<want.length;i++){
        for(let j=0;j<number[i];j++){
            list.push(want[i])
        }
    }
    console.log(list)
    while(index<discount.length-9){
        const tmp = [...list];
        for(let k=index;k<index+10;k++){
            if(tmp.includes(discount[k])){
                tmp.splice(tmp.indexOf(discount[k]),1);
            }
        }
        if(tmp.length===0)answer++
        index++;
    }
  

    return answer;
}