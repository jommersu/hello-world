/*

给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.
 */
console.log(fizzbuzz(20));
function fizzbuzz(n){
    let result = '';
    for(let i = 1; i<= n ; i++){
        if(i % 3 === 0){
            result +=  "fizz";
            if(i % 5 !== 0){
                result += "\n";
            }
        }
        if(i % 5 === 0){
            result += "buzz" + "\n";
        }
    }
    return "n = " + `${n}` + "\n"+ result;
}