// 导入store
const store = require("./store/index")
// 导入action
const { changeNameAction } = require("./store/actionCreators")
// 订阅store中的数据
store.subscribe(() => {
  console.log("store:", store.getState());
})

// 修改store中的数据
const nameAction = changeNameAction("wbt")
store.dispatch(nameAction)
store.dispatch(changeNameAction("wbt2"))

/* 
  优化
  1.action的生成：由actionCreator生成
  2.将actionCreator封装到actionCreators.js中
  3.常量抽取
  4.reducer独立封装
*/
