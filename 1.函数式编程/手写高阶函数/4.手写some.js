
/**
 * 手写数组方法some
 * 语法: arr.some(callback(element[, index[, array]])[, thisArg])
 * callback: 数组中每个元素执行的函数,该函数接收三个参数(currentValue:数组中正在处理的当前元素;index(可选):数组中正在处理的当前元素索引;array(可选):forEach方法正在操作的数组);
 * thisArg(可选): 当执行回调函数callback时,用作this的值
 * 返回值: 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。
 * @param {*} fn 
 * @param {*} thisArg
 */
 Array.prototype.mySome = function(fn,thisArg) {
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
  let result = false;
  if(thisArg) {
    T = thisArg;
  }
  while(k < len) {
    if(k in O) {
      result = fn.call(T,O[k],k,O);
    }
    if(result) {
      break;
    }
    k++
  }
  return result
}

// let arr1 = [1,2,3,5,7];
let arr1 = [1,3,5,7,9];

let some1 = arr1.some((ele,i,arr) => {
  return ele % 2 === 0
})
console.log('some1',some1);


let some2 = arr1.mySome((ele,i,arr) => {
  return ele % 2 === 0
})
console.log('some2',some2);
