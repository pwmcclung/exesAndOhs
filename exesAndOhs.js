function XO(str) {
    str = str.toLowerCase()
    let arr = str.split('')
    let countA = 0
    let countB = 0
    for (let i = 0; i <arr.length; i++){
      if (arr[i] === 'x'){
        countA++
      }else if (arr[i] === 'o'){
        countB++
      }
    }
  if (countA === countB){
    return true
  }else{
    return false
  }
}
