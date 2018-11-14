/**
 * Created by lijiawei on 2018/10/30.
 */
function getPosTop( i , j ){
    return 20 + i*120;
}

function getPosLeft( i , j ){
    return 20 + j*120;
}
//根据数字设置颜色,设置名称
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#fc3206";break;
        case 256:return "#b22405";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
    return 'black';
}
function  getNames (number) {
  switch (number) {
    case 2:return "列兵";break;
    case 4:return "上等兵";break;
    case 8:return "军士长";break;
    case 16:return "少尉";break;
    case 32:return "中尉";break;
    case 64:return "上尉";break;
    case 128:return "少校";break;
    case 256:return "中校";break;
    case 512:return "上校";break;
    case 1024:return "大校";break;
    case 2048:return "少将";break;
    case 4096:return "中将";break;
    case 8192:return "上将";break;
  }
  return''
}

function getNumberColor(number) {
    if( number <= 4 )
        return "#776e65";

    return "white";
}
//判断有无空隙
function nospace( board ) {
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}
//canMove
function canMoveLeft( board ) {
    for(var i = 0; i < 4;i++)
        for(var j = 1; j < 4; j++)
            //自身不能为0
            if(board[i][j] != 0)
                if(board[i][j-1] == 0 || board[i][j-1] ==board[i][j]) //1左边是否有数字 2 左边数字是否与自己相等
                return true

        return false
}

function canMoveRight( board ) {
    for(var i = 0; i < 4;i++)
        for(var j = 2; j>=0; j--)
            //自身不能为0
            if(board[i][j]!=0)
                if(board[i][j+1] == 0 || board[i][j+1] ==board[i][j]) //1右边是否有数字 2 右边数字是否与自己相等
                    return true
    return false
}

function canMoveUp( board ) {
    for(var j = 0; j < 4;j++)
        for(var i = 1; i < 4; i++)
            //自身不能为0
            if(board[i][j]!=0)
                if(board[i-1][j] == 0 || board[i-1][j] == board[i][j])//1上边是否有数字 2 上边数字是否与自己相等
                    return true
    return false
}

function canMoveDown( board ) {
    for(var j = 0; j < 4;j++)
        for(var i = 2; i>=0; i--)
            //自身不能为0
            if(board[i][j]!=0)
              if(board[i+1][j] == 0 || board[i+1][j] ==board[i][j])//1下边是否有数字 2 下边数字是否与自己相等
                    return true

    return false
}


// col1 : 前面的一列 、 col2 ： 当前列
function noBlockHorizontal( row , col1 , col2 , board ){
  for( var i = col1 + 1 ; i < col2 ; i ++ )
    if( board[row][i] != 0 )
      return false;
  return true;
}
//row1 前面一行 row2,当前行
function noBlockVertical( col , row1 , row2 , board ){
  for( var i = row1 + 1 ; i < row2 ; i ++ )
    if( board[i][col] != 0 )
      return false;
  return true;
}
