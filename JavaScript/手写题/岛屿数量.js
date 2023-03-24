var numIslands = function (grid) {
  let dx = [1, 0, -1, 0], dy = [0, 1, 0, -1]
  function dfs(x, y) {
    grid[x][y] = '0'
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i], ny = y + dy[i]
      if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length || grid[nx][ny] !== '1') return
      dfs(nx, ny)
    }
  }
  let cnt = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        cnt++
        dfs(i, j)
        console.log(i, j)
      }
    }
  }
  return cnt
};
numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]])
