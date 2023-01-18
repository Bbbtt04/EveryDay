// 导入store
const store = require("./store/index")
// 订阅store中的数据
const unSub = store.subscribe(() => {
  console.log("store:", store.getState());
})

// 修改store中的数据
const nameAction = { type: "changeName", value: "wbt" }
store.dispatch(nameAction)

// 修改store中的数据
const addAction = { type: "add" }
store.dispatch(addAction)

// 取消订阅
unSub()

store.dispatch(addAction)
