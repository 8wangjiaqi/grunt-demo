$(function(){
  var $width=$('#width');
  var $height=$('#height');
  var $btnCal=$('#culate');
  var $perimeter=$('#perimeter');
  var $area=$('#area');


  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());

    var p=2*(w+h),
        a=w*h;

    $perimeter.val(p);
    $area.val(a);
  })
});
;
function Rectangle(width, height) {
    var w = Number(width),
              h = Number(height);

    this.area = function() {
          return w * h;
            
    };

    this.perimeter = function() {
          return 2 * (w + h);
            
    };

}
