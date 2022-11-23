function palindromicSubstring(str) {
  // 非字符串
  if(typeof str !== 'string') {
    return false;
  }
  // 空字符
  if(!str.length) {
    return false;
  }
  // 单一字符
  if (str.length < 2) {
    return true;
  }
  // 双指针，前后比对是否一致
  const len = str.length;
  // 中间点，偶数正好前后对比完全，奇数，保留最中间一位不检查
  const mid = parseInt(len / 2);
  let result = true;
  for(let i = 0; i <= mid; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 -i)) {
      result = false;
      break;
    }
  }
  return result;
}


window.onload = function() {
  console.log(palindromicSubstring('asdf'))
}