
/**
 * 语法: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * @param {*} fn 函数,有三个参数,累加器值,当前值,索引,数组
 * @param {*} initVal  作为第一次调用fn函数时的第一个参数的值,如果没有提供,默认为数组中第一个元素
 */
Array.prototype.myReduce = function(fn,initVal) {
  if(Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError(`${fn} is not a function`);
  }
  let result,arr = Object(this);
  let i=0;
  // 如果传入初始值,第一个参数值就是初始值
  if(initVal) {
    result = initVal;
  }else {
    // 如果没有传入初始值,初始值默认为数组中第一个,后边累加从第二个值开始
    i = 1;
    result = arr[0];
  }
  for(;i < arr.length; i++) {
    result = fn(result,arr[i],i,arr)
  }
  return result
}

let arr = [1,2,3,4,5,5,6,6,7,9];

console.log('aaa',arr.reduce((acc,cur)=>acc+cur));
console.log('bbb',arr.myReduce((acc,cur)=>acc+cur));

// 传入初始值
console.log('aaa1',arr.myReduce((acc,cur)=>acc+cur,30));
console.log('bbb1',arr.myReduce((acc,cur)=>acc+cur,30));
