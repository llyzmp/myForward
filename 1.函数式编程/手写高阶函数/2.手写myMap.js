
/**
 * 手写数组方法map
 * 语法: var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 *      // Return element for new_array 
 *   }[, thisArg])
 * callback: 数组中每个元素执行的函数,该函数接收三个参数(currentValue:数组中正在处理的当前元素;index(可选):数组中正在处理的当前元素索引;array(可选):forEach方法正在操作的数组);
 * thisArg(可选): 当执行回调函数callback时,用作this的值
 * 返回值: 一个由原数组每个元素执行回调函数的结果组成的新数组
 * @param {*} fn 函数作为参数
 */
 Array.prototype.myMap = function(fn,thisArg) {
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

  if(thisArg) {
    T = thisArg;
  }
  // 创建一个数组,长度为len的数组
  let tempArr = new Array(len);
  while(k < len) {
    // in用法:语法prop in object
    // prop: 一个字符串类型或symbol类型的属性或数组索引(非symbol类型将会强制转换为字符串)
    if(k in O) {
      // 执行完有返回值
      let val = fn.call(T,O[k],k,O);
      tempArr[k] = val;
    }
    k++
  }
  return tempArr
}

let arr1 = [1,2,3,4,5,6,7];

let map1 = arr1.map((ele,i,arr) => {
  return ele*2
})
console.log('map1',map1);
let map2 = arr1.myMap((ele,i,arr) => {
  return ele*3
})
console.log('map2',map2);
