const changeNameAction = (value) => {
  return { type: CHANGE_NAME, value }
}

const addAction = () => {
  return { type: CHANGE_ADD }
}

// 导出
module.exports = {
  changeNameAction,
  addAction
}
