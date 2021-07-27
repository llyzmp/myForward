
/**
 * 实现柯理化
 * @param {*} fn 参数为一个函数
 */
function curry(fn) {

  if(Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError(`${fn} is not a function`);
  }

  return function curriedFn(...args) {
    if(fn.length > args.length) {
      return function(...args2){
        return curriedFn(...args.concat([...args2]))
      }
    }
    return fn(...args)
  }

}


// 测试函数
function sum(a,b,c,d) {
  return a+b+c*d
}
let curried = curry(sum)
console.log(curried(1,2,3,4));
console.log(curried(1)(2)(3)(4));
console.log(curried(1,2)(3)(4));


