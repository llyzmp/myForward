/**
 * fn有两个参数first,second
 * 有返回值，排序后的数组
 */
Array.prototype.mySort = function (fn) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError(`${fn} is not a function`)
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (fn(arr[j], arr[j + 1])>0) {
        let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
      }
    }
  }
  return arr
}

let arr1 = [1, 6, 3, 4, 9, 2, 8, 14, 5];

console.log(arr1.sort((a, b) => {
  return a - b
}));
console.log(arr1.mySort((a, b) => {
  return b-a
}));