

/**
 * 防抖函数：在频繁触发的事件结束后，给定的时间之后执行一次
 *
 * @param {*} fn
 * @param {number} [ms=1000]
 * @return {*} 
 */
function debounce (fn, ms = 1000) {
  // 创建一个函数作用域，并初始化变量 timeout
  let timeout = null;
  return function () {
    if (timeout) {
      // 清除执行
      clearTimeout(timeout)
    }
    // 不再有事件，最后执行一次
    timeout = setTimeout(() => {
      // 调用函数并传入参数，绑定this
      fn.apply(this, arguments)
    }, ms)
  }
}


window.onload = function() {
  // 获取dom
  var input = document.getElementById('input0');
  // dom0 事件
  input.oninput = debounce(consoleInput)
  
  function consoleInput (e) {
    console.log(e.target.value)
  }
  
}
