const { createStore } = require("redux");
const reducer = require("./reducer");

// store
const store = createStore(reducer)

// 导出
module.exports = store
