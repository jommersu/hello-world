/*

题目：查找斐波纳契数列中第 N 个数。

所谓的斐波纳契数列是指：
前2个数是 0 和 1 。
第 i 个数是第 i-1 个数和第i-2 个数的和。
斐波纳契数列的前10个数字是：
0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …
 */
let arr = [0 ,1 ];
let N = 11;
function  Fibonacci(N){
for(let i = 2; i < N  ; i++){
    arr[i] = arr[i-2] + arr[i-1];
}
return arr[N-1];
}
console.log("第"+N+"个数字是："+ Fibonacci(N));

