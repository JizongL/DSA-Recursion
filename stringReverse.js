
function stringReverse(string){

  if(string.length===0){
    return ''
  }
  return stringReverse(string.substr(1))+string[0]
}


console.log(stringReverse('abcde'))