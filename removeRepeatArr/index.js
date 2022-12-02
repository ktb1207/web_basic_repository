/**
 *
 *
 * @param {Array} arr
 * @return {number} 
 * @descripe 原地删除有序数组重复项
 */
// 原地删除，即返回的数组==原数组
function removeRepeatArr(arr){
  // 移动卡尺
  let step = 0;
  for(let i = step; i < arr.length; i+=step) {
    if(arr[i] === arr[i + 1]) {
      // 比较当前元素和下一位元素是否重复，重复则删除下一位，循环位置不变，继续与下一个元素比较
      arr.splice(i+1, 1)
      // 不移动
      step = 0
    } else {
      // 当前元素和下一个原属不重复，循环位置递增1，移动下一位
      step = 1;
    }
  }
  return arr;
}

window.onload = function() {
  const testArr = [1,2,2,2,3,3,4,4,5,6,7,8,8,8,9,9,9]
  console.log(removeRepeatArr(testArr))
}