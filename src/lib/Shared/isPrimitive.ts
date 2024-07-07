export let isPrimitive = (val) => {
  
  if(val === null){
      return true;
  }
  
  if(typeof val == "object" || typeof val == "function"){
    return false
  }else{
    return true
  }
}

export let isArrayOfObject = <T>(arr: T[]) => !arr.every(isPrimitive)