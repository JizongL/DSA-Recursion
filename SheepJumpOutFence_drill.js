function SheepJumpOutOfFence(n){
    if(n===0){
      return
      }    
    console.log('Another sheep jumps over the fence')    
    return(SheepJumpOutOfFence(n-1))  
  }
  
  SheepJumpOutOfFence(10)