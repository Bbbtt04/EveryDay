// 导入store
const store = require("./store/index")

// 修改store中的数据
const nameAction = { type: "changeName", value: "wbt" }
store.dispatch(nameAction)

console.log("store:", store.getState());
