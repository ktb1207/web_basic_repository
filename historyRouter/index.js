/**
 * window history
 *
 * window.history.go 可以跳转到浏览器会话历史中的指定的某一个记录页
 * window.history.forward 指向浏览器会话历史中的下一页，跟浏览器的前进按钮相同
 * window.history.back 返回浏览器会话历史中的上一页，跟浏览器的回退按钮功能相同
 * window.history.pushState 可以将给定的数据压入到浏览器会话历史栈中
 * window.history.replaceState 将当前的会话页面的url替换成指定的数据
 *
 *
 * history路由的实现，主要就是依靠于pushState与replaceState实现
 *
 * 都会改变当前页面显示的url，但都不会刷新页面
 * pushState是压入浏览器的会话历史栈中，会使得history.length加1，而replaceState是替换当前的这条会话历史，因此不会增加history.length
 *
 * history.pushState和history.replaceState方法是      不会触发popstate事件的
 * 但是浏览器的某些行为会导致popstate，比如前进后退按钮，go、back、forward
 *
 */


window.onload = function(){
  // 高阶函数封装自定义事件，拦截pushState, replaceState
  function bindHistoryEvent (type) {
    const historyEvent = history[type];
    return function () {
      const newEvent = historyEvent.apply(this, arguments);
      // 声明自定义事件pushState replaceState
      const customEvent = new Event(type)
      customEvent.arguments = arguments;
      // 抛出自定义事件 pushState replaceState
      window.dispatchEvent(customEvent)
      return newEvent;
    }
  }
  
  // 重写pushState replaceState
  history.pushState = bindHistoryEvent('pushState')
  history.replaceState = bindHistoryEvent('replaceState')
  
  
  // 获取button
  var buttons = document.getElementsByTagName('button');
  // 添加事件
  for (let i=0; i< buttons.length; i++) {
    buttons[i].onclick = function(e) {
      const getPath = e.target.dataset['path'] || 'home';
      const state = {
        path: '/' + getPath,
        name: getPath
      }
      history.pushState(state, getPath, getPath)
    }
  }

  // 坚挺popstate
  window.addEventListener('popstate', function(ev) {
    console.log(ev)
  })
  // 监听自定义事件 pushState
  window.addEventListener('pushState', function(ev) {
    console.log(ev)
  })
  // 监听自定义事件 replaceState
  window.addEventListener('replaceState', function(ev) {
    console.log(ev)
  })
}