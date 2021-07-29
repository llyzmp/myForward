const _ = require('lodash');

let arr = ['xiaoming','laowang','zhangsan','daliu'];

// 数组中的第一个和最后一个元素
console.log(_.first(arr));
console.log(_.last(arr));


// 数组中第一个并且转大写
console.log(_.toUpper(_.first(arr)));

// 数组反转,不是纯函数,改变了原数组,lodash里边的reverse也不是纯函数
console.log(_.reverse(arr));



