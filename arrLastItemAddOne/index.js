function plusOne (digits) {
  // 空数组
  if(digits.length === 0) {
    return digits;
  }
  // 转为数字
  const numArr = BigInt(digits.join(''))
  // 加1和
  const total = numArr + BigInt(1);
  // 数字转数组，由于每一项是字符串，再转数字
  return total.toString().split('').map(item => Number(item))
};
window.onload = function (){
  const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
  console.log(plusOne(arr))
}