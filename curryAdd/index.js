window.onload = function(){

  // 实现add(1)(2) = 3
  // demo1
  const add1 = (sum1) => (sum2) => sum1 + sum2;
  // demo2
  function add2(num1) {
    return function (num2) {
      return num1 + num2;
    }
  }

  console.log(add1(1)(2))
  console.log(add2(2)(1))

  // 升级 add(1)(2)(3)(4) = 10
  // add(1)(2)(3)(4)(5) = 15

  function moreAdd(x) {
    // 缓存和
    let sum = x;
    // 返回一个函数，接受参数并处理 和 + 新参数，再返回这个函数，无限循环
    let temp = function (item) {
      sum += item;
      return temp;
    }
    // 每个对象都有toString()方法，重写toString(),调用返回函数的toString()返回结果
    temp.toString = () => sum

    return temp;
  }


  console.log(moreAdd(1)(2).toString())

  
}