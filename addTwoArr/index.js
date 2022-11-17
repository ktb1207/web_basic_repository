window.onload = function() {
/**
 * @describe 找出两个数组中长度较小的一个
 *
 * @param {*} l1
 * @param {*} l2
 * @return {*} 
 */
function findMin(l1,l2){
  return l1.length - l2.length > 0 ? l2 : l1;
}
/**
 * @describe 找出两个数组中长度较大的一个
 *
 * @param {*} l1
 * @param {*} l2
 * @return {*} 
 */
function findMax(l1, l2) {
  return l1.length - l2.length > 0 ? l1 : l2;
}
var addTwoNumbers = function(l1, l2) {
  if (l1.length === 0) {
      return l2
  }
  if(l2.length === 0){
      return l1
  }
  const ma = findMax(l1,l2)
  const mi = findMin(l1,l2)
  // 暂存相加
  const rnArr = [];
  // 进位值
  let add = 0;
  // 较大长度索引
  let maLength = ma.length - 1;
  for(i = mi.length - 1; i>=0; i--) {
      if(mi[i] + ma[maLength] >= 10) {
        // 相加大于10，进位1
        rnArr.unshift(mi[i] + ma[maLength] - 10 + add)
          add = 1;
      } else {
        // 相加小于10，进位0  
        rnArr.unshift(mi[i] + ma[maLength])
          add = 0;
      }
      // 较大索引左移动
      maLength--;
  }
  // 较大剩余未加部分
  const moreArr = ma.splice(0, ma.length - mi.length);
  // 是否含有进位
  add > 0 ? moreArr[moreArr.length - 1] = moreArr[moreArr.length - 1] + 1 : null;
  return [...moreArr,...rnArr]
};

const l1 = [1,2,3,4,5];
const l2 = [7,8,9];

console.log(addTwoNumbers(l1,l2))

}