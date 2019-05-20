function binary(num){
  if(num<2){
    return num.toString();
  }
  const newNum = (num-num%2)/2;
  return binary(newNum)+(num%2).toString();
}

console.log(binary(25))
// 1101