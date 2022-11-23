/**
 *
 *
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs){
  // 空数组
  if (strs.length === 0) {
    return '';
  }
  // 只含一位，公共全部
  if (strs.length === 1) {
    return strs[0]
  }
  // 保存数组每一项字符串长度
  const itemStrLengthmap = {};
  strs.forEach((item, index) => {
    itemStrLengthmap[index] = item.length;
  })
  // 获取所有字符串长度
  const lengthArr = Object.values(itemStrLengthmap);
  // 包含空字符串
  if(lengthArr.includes(0)){
    return ''
  }
  let result = '';
  // 最小长度
  const minLen = Math.min.apply(null, lengthArr);
  w:for(let k =0; k <= minLen; k++) {
    const activeStr = strs[0].charAt(k);
    i:for(let i = 0, l = strs.length; i<l; i++) {
      if(strs[i].charAt(k) !== activeStr) {
        break w;
      }
      if(i === l - 1) {
        result += activeStr;
      }
    }
  }
  return result;
}


window.onload = function(){
  var arr = ['asd', 'asaaaaa', 'asd', 'askk'];
  console.log(longestCommonPrefix(arr))
}