/**
 * 数组扁平化
 *
 * @param {*} arr
 * @return {*} 
 */
function flatArr(arr) {
  // 非数组直接返回
  if(!Array.isArray(arr)) {
    return arr;
  }

  const _crr = [];
  // 递归
  arr.forEach(v => {
    if(Array.isArray(v)) {
      _crr.push(...flatArr(v))
    } else {
      _crr.push(v)
    }
  })
  return _crr;
}


window.onload = function() {
  var arr = [[3,4],1,2,[5,6], [7,[9,0]]]

  console.log(flatArr(arr))
}