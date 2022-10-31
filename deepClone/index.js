function deepClone(value) {
  // 简单值，直接返回
  if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    return value;
  }
  // undefined null
  if (typeof value === 'undefined' || (typeof value === 'object' && !value )) {
    return value;
  }
  // Date
  if (target instanceof Date) {
    return new Date(target);
  }
  // RegExp
  if (target instanceof RegExp) {
    return new RegExp(target);
  }
  // Array
  if (Array.isArray(value)) {
    const newArr = [];
    value.forEach(item => {
      newArr.push(deepClone(item))
    })
    return newArr;
  }
  // Object
  if (typeof value === 'object' && value) {
    const newObj = {};
    for (let k in value) {
      newObj[k] = deepClone(value[k])
    }
    return newObj
  }
  // function 函数拷贝的意义不大，可直接返回
  if (typeof value === 'function') {
    return value;
  }

}


window.onload = function () {
  const originalObj = {
    name: 'name',
    age: 48,
    say: function () {
      console.log(this.name)
    },
    info: {
      title: 'title'
    },
    bol: true,
    eat: null,
    drink: undefined,
    children: [
      {
        name: 'zhangsan',
        age: 12,
        say: function () {
          console.log(this.name)
        },
        info: {
          title: 'title'
        },
        bol: false,
        eat: null,
        drink: undefined
      },
      {
        name: '李四',
        age: 6,
        say: function () {
          console.log(this.name)
        },
        info: {
          title: 'title'
        },
        bol: false,
        eat: null,
        drink: undefined
      }
    ]
  }
  // JSON处理深拷贝的问题在于-JSON.stringify
  // 1. new Date()时间会变成 日期字符串
  // 2. 正则，Error对象，结果变为空对象
  // 3. function undefined则会被丢失
  // 4. NaN Infinity则会变成null
  // 5. 只能序列化对象的可枚举的自有属性，如果obj中的对象是由构造函数生成的实例对象， 深拷贝后，会丢弃对象的constructor
  const newObj1 = JSON.stringify(originalObj)
  console.log(newObj1)

  const newObj2 = deepClone(originalObj);
  console.log(newObj2)

  originalObj.say['copyfn'] = 'copyfn'

  console.log(newObj2.say.copyfn)
}