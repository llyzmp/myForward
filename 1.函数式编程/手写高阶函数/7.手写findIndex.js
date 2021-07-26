
Array.prototype.myFindIndex = function(fn,thisArg) {
  if(Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError(`${fn} is not a function`)
  }
  let T;
  if(thisArg) {
    T = thisArg;
  }
  let O = Object(this);
  let len = O.length >>> 0;
  // 默认返回结果为-1,找不到就返回-1
  let k = 0,result = -1;
  while(k < len) {
    if(k in O) {
      if(fn.call(T,O[k],k,O)){
        // 返回第一个索引
        result = k;
        // 找到第一个满足条件的终止
        break;
      }
    }
    k++
  }
  return result
}

let arr = [1,2,3,4,5,6,7,7,8];

let res = arr.myFindIndex((ele,i,arr)=>{
  return ele > 5
})
console.log('第一个大于5的索引为',res);