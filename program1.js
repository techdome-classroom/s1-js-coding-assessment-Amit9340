const getTotalIsles = function (grid) {
  if(grid===null || grid.length===0){
    return 0;
  }
  let totalIslands = 0;

  const numRows = grid.length;
  const numCols = grid[0].length;

  const dfs = (row, col)=>{
    if(row<0 || row>=numRows || col<0 || col>=numCols || grid[row][col] === 'W'){
      return;
    }

    grid[row][col] = 'W';

    dfs(row-1, col);
    dfs(row+1, col);
    dfs(row, col-1);
    dfs(row, col+1);
  };

  for(let i=0; i<numRows; i++){
    for(let j=0; j<numCols; j++){
      if(grid[i][j]==='L'){
        totalIslands++;
        dfs(i, j);

      }
    }
  }
  return totalIslands;
};

module.exports = getTotalIsles;