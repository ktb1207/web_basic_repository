/**
 * 合并两个有序数组
 *
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} 
 */
function mergeTwoLists (list1,list2) {
  // 记录插入的位置，下次遍历从此开始，因为是有序数组
  let forIndex = 0;
  // 遍历list1,向list2插入
  w:for(let i = 0, l = list1.length; i<l; i++) {
    i:for(let k = forIndex; k < list2.length; k++) {
      if(list1[i] <= list2[k]) {
        list2.splice(k, 0, list1[i])
        // 记录插入位置
        forIndex = k;
        break i;
      }
      if(k === list2.length - 1 && list1[i] > list2[k]) {
        // 添加最后
        list2.push(list1[i])
        // 记录插入位置
        forIndex = k + 1;
        break i;
      }
    }
  }
  return list2
}
window.onload = function() {
  const arr1 = [1,3,5,7,9]
  const arr2 = [2,4,6,8]
  console.log(mergeTwoLists(arr1, arr2))
}