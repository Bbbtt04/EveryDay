const data = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]


function treeToList(data) {
  let result = []
  data.forEach(item => {
    result.push(item)
    if (item.children) {
      result = result.concat(treeToList(item.children))
      delete item.children
    }
  })
  return result
}
console.log(treeToList(data));


// 无副作用
function treeToList_2(data) {
  let result = []
  data.forEach(item => {
    let obj = {
      id: item.id,
      name: item.name
    }
    result.push(obj)
    if (item.children) {
      result = result.concat(treeToList_2(item.children))
    }
  })
  return result
}
console.log(treeToList_2(data));
