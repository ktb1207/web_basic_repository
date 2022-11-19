window.onload = function(){

var lengthOfLongestSubstring = function(s) {
  if(s.length < 2) {
     return s
  }
  const obj = {};
  const toMap = function (s) {
    // 字符串转数组
    const arr = s.split('');
    // 保存未重复字符
    const startArr = [];
    for(let i = 0, l = arr.length; i < l; i++) {
        if (startArr.includes(arr[i])) {
          // 保存当前未重复字符
          obj[startArr.length] = startArr.join('')
          const findRepeatOldIndex = startArr.findIndex(n => n === arr[i])
          // 未重复字符串保留当前重复位置的右侧字符
          const concatArr = startArr.splice(findRepeatOldIndex + 1);
          // 右侧字符和未遍历字符🈴️成新的字符串，重新开始寻找
          const yuArr = [...concatArr, ...arr.splice(i)];
          yuArr.length > 0 ?toMap(yuArr.join('')) : null;
          break;
        } else {
          startArr.push(arr[i])
        }
    }
    obj[startArr.length] = startArr.join('')
  }

  toMap(s)
 
 return obj[Math.max(...Object.keys(obj))]
 };

 console.log(lengthOfLongestSubstring('qqqqweeee'))
}