const { CHANGE_NAME, CHANGE_ADD } = require("./constants");

// 初始化
const defaultState = {
  count: 0,
  name: "zhangsan",
}

// 定义reducer（纯函数）
/* 
  1. reducer是一个纯函数
  2. reducer接收两个参数，第一个参数是state，第二个参数是action
  3. reducer必须返回一个新的state
*/
function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.value
      }
    case CHANGE_ADD:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      break;
  }
  return state
}

// 导出
module.exports = reducer
