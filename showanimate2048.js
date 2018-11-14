/**
 * Created by lijiawei on 2018/10/30.
 */

//显示数字
function showNumberWithAnimation( i , j , randNumber ){

    var numberCell = $('#number-cell-' + i + "-" + j );

    numberCell.css('background-color',getNumberBackgroundColor( randNumber ) );
    numberCell.css('color',getNumberColor( randNumber ) );
    if (randNumber == 2)numberCell.text( "列兵" );
    else  numberCell.text("上等兵")

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop( i , j ),
        left:getPosLeft( i , j )
    },50);

}
//移动数字
function showMoveAnimation( fromx , fromy , tox, toy ){
  var numberCell = $('#number-cell-' + fromx + '-' + fromy );
  numberCell.animate({
    top:getPosTop( tox , toy ),
    left:getPosLeft( tox , toy )
  },200);
}
