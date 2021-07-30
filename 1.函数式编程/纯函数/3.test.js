//  纯函数的好处
// 1. 可缓存
// 相同的输入有相同的结果,纯函数的结果可以缓存起来,可以提高性能

const _ = require('lodash');

function getArea(r) {
  console.log('传入的半径', r);
  return Math.PI * r * r
}

// 记忆函数, 第一次传入的值,后续使用会缓存,节省性能
const memoizedArea = _.memoize(getArea);


console.log(memoizedArea(5));  // 第一次打印了  传入的半径 5     78.53981633974483
console.log(memoizedArea(5));  // 78.53981633974483
console.log(memoizedArea(5));  // 78.53981633974483
console.log(memoizedArea(5));  // 78.53981633974483


// 模拟缓存记忆函数， 返回一个函数，返回的函数可以传参
// 思路： 在函数内创建一个对象，参数为一个函数，把参数取出来作为对象的键，
function myMemorize(fn) {
  let obj = {};
  let key = JSON.stringify(arguments);
  return function(...args) {
    if(obj[key]) {
      return obj[key]
    }
    return obj[key] = fn.call(fn,...args)
  }
}



console.log(memoizedArea(4));  // 第一次打印了  传入的半径 4     50.26548245743669
console.log(memoizedArea(4));  // 50.26548245743669
console.log(memoizedArea(4));  // 50.26548245743669
console.log(memoizedArea(4));  // 50.26548245743669


