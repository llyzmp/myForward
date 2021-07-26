
/**
 * 函数执行一次
 * @param {*} fn 
 */
function once(fn) {
  let flag = true;

  return function(...args) {
    if(flag) {
      flag = false;
      fn.call(this,...args)
    }
  }

}

function pay(num) {
  console.log(`支付${num}元`);
}
let fn1 = once(pay);

fn1(10); // 支付10元
fn1(10);
fn1(10);
fn1(10);
