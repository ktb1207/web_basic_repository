/**
 * @describe 平行结构树数据转树结构
 *
 * @param {*} [list=[]]
 * @return {*} 
 */
function listToTree (list = []) {
  // 限制元数据类型为数组
  if (!(list instanceof Array)) {
    return []
  }
  if (list.length === 0) {
    return []
  }
  const createObj = {};
  // map id--item
  for (let i = 0, l = list.length; i<l; i++) {
    if (!createObj[list[i].id]) {
      createObj[list[i].id] = list[i];
    }
  }
  // 构建树，利用了引用数据类型的特殊性
  for (let i = 0, l = list.length; i<l; i++) {
    if (list[i].pid) {
      createObj[list[i].pid].children ? createObj[list[i].pid].children.push(list[i]) : createObj[list[i].pid].children = [list[i]]
    }
  }
  const treeArr = [];
  // 过滤掉多余子节点，剩余根节点
  for (let k in createObj) {
    if (!createObj[k].pid) {
      treeArr.push(createObj[k])
    }
  }
  return treeArr;
}
/**
 * @describe 树数据扁平化
 *
 * @param {*} [tree=[]]
 * @return {*} 
 */
function flatTreeToArr(tree = []) {
  if (!(tree instanceof Array)) {
    return []
  }
  if (tree.length === 0) {
    return tree;
  }
  let createArr = [];
  for (let i = 0, l = tree.length; i < l; i++) {
    createArr.push(tree[i])
    // 递归
    if (tree[i].children && tree[i].children.length > 0) {
      createArr = createArr.concat(flatTreeToArr(tree[i].children))
    }
    // 删除原有children
    delete tree[i].children
  }
  return createArr;
}

window.onload = function() {
  var listArr = [
    {
      pid: null,
      id: 10001,
      name: '园区1'
    },
    {
      pid: null,
      id: 10002,
      name: '园区2'
    },
    {
      pid: 10001,
      id: 100011,
      name: 'a楼'
    },
    {
      pid: 10001,
      id: 100012,
      name: 'b楼'
    },
    {
      pid: 10002,
      id: 100013,
      name: 'c楼'
    },
    {
      pid: 100013,
      id: 1000131,
      name: '1单元'
    },
    {
      pid: 100012,
      id: 1000121,
      name: '1单元'
    }
  ]

  const resultTree = listToTree(listArr)
  const resultFlat = flatTreeToArr(JSON.parse(JSON.stringify(resultTree)));
  console.log(resultTree)
  console.log(resultFlat)
}