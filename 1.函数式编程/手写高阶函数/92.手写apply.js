
/**
 * 语法： func.apply(thisArg, [argsArray])
 * @param {*} thisArg 必选的，在 func 函数运行时使用的 this 值
 * @param {*} args 参数列表
 * 返回值： 调用有指定this值和参数的函数的结果。
 */
Function.prototype.myApply = function (thisArg,args){
  if(thisArg === undefined || thisArg === null) {
    thisArg = window;
  }else {
    thisArg = Object(thisArg);
  }

  let fn = Symbol('fn');
  thisArg[fn] = this;
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result
}


function test(arg) {
  console.log('我的this是',this,arg);
  return 'return'
}
let obj = {
  a: 1,
  b: 3
}
// console.log('test1',test.apply(obj,[1,3,5,6,7]));
console.log('test1',test.myApply(obj,[1,3,5,6,7]));