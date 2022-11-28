/**
 *
 * ({[()]})
 * 利用栈，遍历字符串，遇到左括号，压入栈，遇到右括号，弹出栈顶的值必须和现在的右括号成对。
 * @param {string} str
 * @return {boolean}
 */
function isValidKuoHao(str){
  const keyMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  // 空字符 false
  if(str.length===0) {
    return false;
  }
  // 单字符
  if(str.length === 1) {
    // 一个左括号，false
    if(keyMap[str]) {
      return false
    }
    // 不是左括号，也不是右括号 ？
    return !keyMap[str] && !Object.values(keyMap).includes(str) ? true : false;
  }
  let result = true;
  // 模拟栈
  const keyArr = [];
  for(let i = 0, l = str.length; i < l; i++) {
    // 左括号，压栈
    if(keyMap[str.charAt(i)]) {
      keyArr.push(str.charAt(i))
    }
    // 右括号
    if(Object.values(keyMap).includes(str.charAt(i))) {
      // 先弹出一个值
      if(keyMap[keyArr.pop()] !== str.charAt(i)) {
        // 弹出的左括号如果和现在的右括号不成对，直接返回false
        result = false;
        break
      }
    }
  }
  // 栈为空，则是有效的括号，否则不是
  keyArr.length > 0 ? result = false : null;

  return result;
}

window.onload = function() {
  console.log(isValidKuoHao('['))
}