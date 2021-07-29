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


// 模拟缓存记忆函数

function myMemorize() {

}





