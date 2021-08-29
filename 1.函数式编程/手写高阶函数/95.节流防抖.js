/**
 * 函数防抖
 * 触发高频事件后n秒内函数只会执行一次,如果n秒内高频事件再次被触发,则重新计算时间
 * 每次触发事件时都取消之前的延时调用方法
 * @param {*} fn 函数
 * @param {*} time 时间
 */
 function debounce(fn,time) {
  let timer = null;
  return function() {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,arguments)
    },time)
  }
}


/**
 * 高频事件触发,但是在n秒内只会执行一次,节流会稀释函数的执行频率
 * 每次触发事件时都判断当前是否有等待执行的延时函数
 * @param {*} fn 函数
 * @param {*} time 时间
 */
function throttle(fn, time) {
  // 通过闭包保存一个标记
  let flag = true; 
  return function() {
    // 如果flag不为true,直接return
    if(!flag) return;
    // 设置为false
    flag = false;
    // 将需要节流的函数放在定时器中
    setTimeout(() => {
      fn.apply(this,arguments);
      // 执行完毕后,把标记设置为true,标识可以执行下次循环了
      // 当定时器没有执行的时候标记永远为false,在开头就被return
      flag = true;
    }, time);
  }
}