/**
 * 实现bind
 * 语法： function.bind(thisArg[, arg1[, arg2[, ...]]])
 * @param {*} thisArg 
 * @param  {...any} args 
 * 返回值： 返回一个原函数的拷贝，并拥有指定的this值和初始参数
 */
Function.prototype.myBind = function(thisArg) {
  if(thisArg === undefined || thisArg === null) {
    thisArg = window;
  }else {
    thisArg = Object(this);
  }
  // 保存一下this
  let _this = this;
  // 获取参数
  let arg1 = Array.from(arguments).slice(1);
  function F() {
    let arg2 = Array.from(arguments);
    return _this.apply(this instanceof F ? this /*作为构造函数使用 */ : thisArg, arg1.contract(arg2))
  }
  // 作为构造函数使用,后续通过new创建实例对象,要可以使用原型上的方法
  F.prototype = Object.create(this.prototype);
  return F
}