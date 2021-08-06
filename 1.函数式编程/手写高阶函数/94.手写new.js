
/**
 * 实现new操作符
 * new操作符都做了哪些事情
 * 1. 创建一个空对象
 * 2. 把对象的隐式原型指向构造函数的原型对象
 * 3. 改变this指向,把this指向new创建的实例对象
 * 4. 返回值,如果手动返回一个对象,那么就返回该对象,如果返回基本类型的值,就返回新生成的对象
 * @param {*} fn 
 */
function myNew(fn) {
  if(Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError(`${fn} is not a function`);
  }
  let obj = {};
  obj.__proto__ = Object.create(fn.prototype);
  let result = fn.apply(obj,Array.from(arguments).slice(1));

  return result instanceof Object ? result : obj
}


function Animal(name,color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.fn = function() {
  console.log('我是fn函数')
}
let an1 = myNew(Animal,'大黄','白色');

console.log(an1);
console.log(an1.fn());