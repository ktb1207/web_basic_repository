
function throttle (fn, ms = 200) {
  // 创建一个函数作用域，并初始化变量 timeout
  let timeout = null;

  return function () {
    // 上一次循环没有执行，则直接跳过
    if (timeout) {
      return;
    }
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
      // 可以执行下一次循环了
      timeout = null;
    }, ms)
  }
}

window.onload = function () {
  var wrp = document.getElementById('content')
  wrp.onmousemove = throttle(move)
  function move (e) {
    console.log(e)
  }
}