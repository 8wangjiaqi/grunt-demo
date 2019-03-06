function add(x,y){
  
  if(((typeof x)==='number') && ((typeof y) === 'number')){
    return x+y;
  }else{
    return NaN;
  }
  
  //return Number(x) + Number(y);
}

//导出，模块才可以用
module.exports=add;
