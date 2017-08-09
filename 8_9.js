let arr = [0 ,1 ];
let N = 10;
for(let i = 2; i < N  ; i++){
    arr[i] = arr[i-2] + arr[i-1];
}
console.log(arr);
console.log("第"+N+"个数字是："+ arr[N-1]);

