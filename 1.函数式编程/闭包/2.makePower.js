
console.log('4的平方',Math.pow(4,2));
console.log('5的平方',Math.pow(5,2));
console.log('5的立方',Math.pow(5,3));
/**
 * 创建一个函数,先写好平方数,后续传入需要计算的数字
 * @param {*} pow 平方数
 * @returns 
 */
function makePower(pow){
  return function(num) {
    return Math.pow(num,pow);
  }
}
// 
let pow2 = makePower(2);
let pow3 = makePower(3);

console.log(pow2(4));
console.log(pow2(5));
console.log(pow3(5));