

/**
 * 语法: function.call(thisArg, arg1, arg2, ...)
 * @param {*} thisArg   thisArg可选,在function 运行时使用的this的值
 * @param  {...any} args  参数列表
 * 返回值: 使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。
 */
Function.prototype.myCall = function(thisArg,...args) {
  if(thisArg === null || thisArg === undefined) {
    thisArg = window;
  }else {
    thisArg = Object(thisArg)
  }
  let fnName = Symbol('fn');
  thisArg[fnName] = this
  let result = thisArg[fnName](...args);
  delete thisArg[fnName];
  return result
}


function test(...args) {
  console.log('我的this是',this,...args);
  return 'return'
}
let obj = {
  a: 1,
  b: 3
}
// console.log('test1',test.call(obj,1,3,5,6,7));
console.log('test1',test.myCall(obj,1,3,5,6,7));