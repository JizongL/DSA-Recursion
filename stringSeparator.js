function stringSeparator(string){
    if(string.length===0){
      return ''
    }
  
    if(string[0]==='/'){
      return stringSeparator(string.substr(1))
    }
  
    return string[0]+stringSeparator(string.substr(1))
  
  }
  
  
  console.log(stringSeparator('02/20/2020'))
  
  