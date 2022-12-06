/**
 * 验证一个字符串是否是回文，忽略大小写和其他字符
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalinStr(str){
  // 空或1个字符
  if(str.length < 2) {
    return true;
  }
  // 匹配非 0-9，a-z
  const reg = /[^0-9a-z]/g;
  // 不区分大小写
  const smallStr = str.toLowerCase();
  // 忽略其他符号
  const realStr = smallStr.replace(reg, '');
  // 中间位置
  const midleIndex = parseInt(realStr.length / 2);
  let result = true;
  for(let i = 0; i < midleIndex; i++) {
    if(realStr.charAt(i) !== realStr.charAt(realStr.length - 1 - i)) {
      result = false;
      break;
    }
  }
  return result;

}



window.onload = function(){
  console.log(isPalinStr('A man, a plan, a canal: Panama'))
}