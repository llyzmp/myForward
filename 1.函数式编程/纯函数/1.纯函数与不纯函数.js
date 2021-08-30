
// 纯函数: 相同的输入永远会得到相同的输出,而且没有任何观察的副作用
// 纯函数就类似数字中的函数(用来描述输入和输出之间的关系,y=f(x))

let num = [1,2,3,4,5,6,7,8,9];

// slice方法,截取的时候返回截取的函数,不影响原数组

console.log(num.slice(1,5));  // [ 2, 3, 4, 5 ]
console.log(num.slice(1,5));  // [ 2, 3, 4, 5 ]
console.log(num.slice(1,5));  // [ 2, 3, 4, 5 ]


// splice影响原数组,不纯函数

console.log(num.splice(1,5)); // [ 2, 3, 4, 5, 6 ]
console.log(num.splice(1,5)); // [ 7, 8, 9 ]
console.log(num.splice(1,5)); // []