/* 
  给你一个下标从 0 开始的 m x n 整数矩阵 grid 。你一开始的位置在 左上角 格子 (0, 0) 。

当你在格子 (i, j) 的时候，你可以移动到以下格子之一：

满足 j < k <= grid[i][j] + j 的格子 (i, k) （向右移动），或者
满足 i < k <= grid[i][j] + i 的格子 (k, j) （向下移动）。
请你返回到达 右下角 格子 (m - 1, n - 1) 需要经过的最少移动格子数，如果无法到达右下角格子，请你返回 -1 。

输入：grid = [[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]
输出：4
解释：上图展示了到达右下角格子经过的 4 个格子。
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [[0, 0]];
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  visited[0][0] = true;
  let step = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      if (x === m - 1 && y === n - 1) {
        return ++step;
      }
      for (let j = 1; j <= grid[x][y]; j++) {
        if (x + j < m && !visited[x + j][y]) {
          queue.push([x + j, y]);
          visited[x + j][y] = true;
        }
        if (y + j < n && !visited[x][y + j]) {
          queue.push([x, y + j]);
          visited[x][y + j] = true;
        }
      }
    }
    step++;
  }
  return -1;
};
