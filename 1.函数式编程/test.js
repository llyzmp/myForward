// 1. 父构造函数
function Father(uname, age) {
  // this 指向父构造函数的对象实例
  this.uname = uname;
  this.age = age;
}
Father.prototype.f = function() {
  console.log('我是父级原型方法')
}
// 2 .子构造函数 
function Son(uname, age, score) {
  // this 指向子构造函数的对象实例
  Father.call(this, uname, age);
  this.score = score;
}

// Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
  Son.prototype = new Father();
  // 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
  Son.prototype.constructor = Son;
  Son.prototype.bb = function() {
    console.log('woshi1slsdlfldsj');
  }
  var son = new Son('小明', 18, 100);
  son.f(); // 我是父级原型方法
  son.bb(); // 我是父级原型方法
  console.log(son);