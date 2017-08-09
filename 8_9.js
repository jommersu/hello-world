let arr = [0 ,1 ];
let N = 11;
function  Fibonacci(N){
for(let i = 2; i < N  ; i++){
    arr[i] = arr[i-2] + arr[i-1];
}
return arr[N-1];
}
console.log("第"+N+"个数字是："+ Fibonacci(N));

