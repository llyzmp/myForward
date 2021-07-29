
// 模拟员工发工资,基本工资和提成
/**
 * 众多员工基本工资相同,提成不同,有的提成相同,基本工资不同,
 * @param {*} base 
 * @returns 
 */
function salary(base) {
  return function(performance) {
    return base + performance
  }
}


// 基本工资
let salary1 = salary(15000);
let salary2 = salary(20000);

// 加上提成

console.log(salary1(5000));
console.log(salary1(6000));
console.log(salary2(6000));
console.log(salary2(6000));
