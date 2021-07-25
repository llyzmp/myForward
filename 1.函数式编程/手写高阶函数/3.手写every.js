
/**
 * 手写数组方法every
 * 语法: arr.every(callback(element[, index[, array]])[, thisArg])
 * callback: 数组中每个元素执行的函数,该函数接收三个参数(currentValue:数组中正在处理的当前元素;index(可选):数组中正在处理的当前元素索引;array(可选):forEach方法正在操作的数组);
 * thisArg(可选): 当执行回调函数callback时,用作this的值
 * 返回值: 如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。
 * @param {*} fn 
 * @param {*} thisArg
 */
 Array.prototype.myEvery = function(fn,thisArg) {
  var T, k=0;
  if(this == null) {
    throw new TypeError(`this is null or not defined`)
  }
  // fn参数不是函数时,抛出异常
  if(Object.prototype.toString.call(fn) != "[object Function]") {
    throw TypeError(`${fn} is not a function`)
  }
  // 由于this在非严格模式下this默认被包装成对象,在严格模式下不会默认包装成对象(如果this为基本类型,那么就会是基本类型),,所以这里要自己手动包装一下
  const O = Object(this);
   // 位运算符   将任意js值转化为数字,且不会出现NaN,意思就是所有非数值转换为0,所有大于等于0的数取整数部分
  const len = O.length >>> 0;
  let result = true;
  while(k < len) {
    if(k in O) {
      result = fn.call(T,O[k],k,O);
    }
    if(!result) {
      break;
    }
    k++
  }
  return result
}

// let arr1 = [1,2,3,5,7];
let arr1 = [1,3,5,7,9];

let every1 = arr1.every((ele,i,arr) => {
  return ele % 2 === 1
})
console.log('every1',every1);


let every2 = arr1.myEvery((ele,i,arr) => {
  return ele % 2 === 1
})
console.log('every2',every2);
