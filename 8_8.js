/*
题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。
 */
let i = 2;
    let num = 90;
    while(i <= num){
        if(num % i == 0){
            console.log(i);
            num /= i;
        }else{
            i++;
        }
    }
