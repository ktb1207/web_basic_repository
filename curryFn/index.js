/**
 *
 *
 * @param {*} fn
 * @return {*} 
 */
function curryFn (fn) {
  if (typeof fn !== 'function') {
    console.error('curryFn arguments required function')
  }
  // 返回一个函数
  return function curried () {
    // 判断当前函数已经接受的参数个数，与fn本身需要的参数个数是否一致，一致则执行fn并返回结果
    if (arguments.length >= fn.length) {
      return fn.apply(this, arguments)
    } else {
      // 缓存之前参数
      var arg = arguments;
      // 再返回一个匿名函数，接受剩余不够参数
      return function () {
        return curried.apply(this, [...arg, ...arguments]) // 之前参数，当前参数
      }
    }
  }
}


window.onload = function () {
  function add (a,b,c,d) {
    return a + b + c + d;
  }

  console.log(add(1,2,3,4))
  var add1 = curryFn(add)
  console.log(add1(1)(2)(3)(4))
}