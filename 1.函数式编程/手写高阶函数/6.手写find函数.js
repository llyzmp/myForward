
/**
 * 手写数组find方法
 * @param {*} fn 函数作为参数
 * @param {*} thisArg 
 * 语法: arr.find(callback[, thisArg])
 * callback: 数组中每个元素执行的函数,该函数接收三个参数(currentValue:数组中正在处理的当前元素;index(可选):数组中正在处理的当前元素索引;array(可选):forEach方法正在操作的数组);
 * thisArg(可选): 当执行回调函数callback时,用作this的值
 * 返回值: 返回数组中第一个满足所提供测试函数的元素的值,否则返回undefined
 */
Array.prototype.myFind = function(fn,thisArg) {
  var T, k=0;
  if(Object.prototype.toString.call(fn) !== '[object Function]'){
    throw new TypeError(`${fn} is not a function`)
  }

  const O = Object(this);
  const len = O.length >>> 0;

  if(thisArg) {
    T = thisArg
  }
  let result;
  while(k < len) {
    if(k in O) {
      if(fn.call(T,O[k],k,O)) {
        result = O[k];
        break;
      }
    }
    k++;
  }

  return result

}


// let arr = [1,23,4,5,6,78,9,10];
let arr = [{a:1,b:8},{a:6,b:10}];

let result = arr.myFind((ele,i,arr) => {
  // console.log('aaa',ele,i,arr);
  return ele.a > 5
})
console.log(result);