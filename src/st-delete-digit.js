import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
 if (n < 10) return n;
 let arr = [];
 let res = 0;
 while (n) {
   arr.push(n%10);
   n = Math.floor(n/10);
 }
 for (let i = 0; i < arr.length; i++) {
   let count = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (j !== i) {
          count = count * 10 + arr[j];
      }
  }
  res = Math.max(count, res);
}
return res;
}


