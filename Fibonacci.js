function fb(n){
    if(n<2 && n>=0){
      return n
    }   
   return fb(n-1)+fb(n-2)
   }

console.log(fb(7))   

// for(let i=0;i<20;i++){
//   console.log(fb(i))
// }