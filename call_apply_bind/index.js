var name = 'window';

Function.prototype._call = function(ctx){
  // ctx 指向修改对象，window 或者 obj
  // this 指向 _call的调用着 fn
  // 调用对象为function
  if (typeof this !== 'function') console.error('type error')
  // 默认指向的对象，如果不存在默认指向window
  ctx = ctx || window;
  // 唯一值
  let fn = Symbol();
  // _call函数的this指向调用函数，如fn._call(), _call函数里面的this指向fn, 即将fn作为ctx的一个属性指向的函数
  ctx[fn] = this;
  // args，保存第一个参数外的所有参数
  let args = [...arguments].splice(1);
  // ctx[fn],指向fn函数，调用即修改fn函数的this指向，并传入参数
  let result = ctx[fn](...args);
  // 删除属性
  delete ctx[fn];
  // 返回函数执行的结果
  return result;
}

window.onload = function () {
  console.log('load')
  var name = 'onload';
  var obj = {
    name: 'obj-name',
    'xxxx': function() {
      console.log(this.name)
    }
  }
  function helloName () {
    console.log(this)
    console.log('hello welcome the:' + this.name)
  }

  
  helloName.call(this)
  helloName._call(obj)
}