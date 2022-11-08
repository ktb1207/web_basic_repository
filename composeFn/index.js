function compose (...funcs) {
  // funcs,传递的函数集合
  return function proxy(...args) {
    // args, 第一次调用函数传递的参数
    const funLen = funcs.length;
    // 没有fn,直接返回参数
    if (funLen.length === 0) {
      return args;
    }
    // 只有一个fn，执行fn并返回结果
    if (funLen.length === 1) {
      return funLen[0](...args)
    }
    // 多个fn
    funcs.reverse().reduce((x,y) => {
      return typeof x === 'function' ? y(x(...args)) : y(x)
    })
  }
}



window.onload = function () {
  var arr = [1,2,3,4,5];

  // arr.reduce(function(total,currentVal,currentIndex,arr) {}, initValue)
  // Array.reduce----返回计算结果
  // total, 必须，初始值或者计算后的返回值
  // currentVal， 必须，当前元素
  // currentIndex，必须，当前元素索引
  // arr,可选，当前元素所属的数组对象
  // initValue, 可选，传递给函数的初始值，如果没有提供initValue，那么reduce第一轮函数中的total就是arr[0],currentVal就是arr[1], currentIndex就是1,循环次数为arr.length - 1
  // 如果提供给initValue，那么reduce第一轮函数中的total就是initValue，currentVal就是arr[0],currentIndex就是0,循环次数为arr.length

  // var total = arr.reduce(function(total,currentVal,currentIndex) {
  //   console.log(total)
  //   console.log(currentVal)
  //   console.log(currentIndex)
  //   return total + currentVal;
  // })
  // console.log(total)



}