/*

题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数
其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
 */
printNum();
function printNum() {
    let arr = [];
    for(let i = 100 ; i < 1000 ; i++){
        arr.push(i);
    }
    let filtered = arr.filter(isVal);
    console.log("所有的水仙花数是："+filtered);
}
function isVal(item) {
    let x = Math.floor(item / 100);
    let y = Math.floor((item -x * 100) / 10);
    let z = Math.floor(item - x * 100 - y * 10 );
    return item === Math.pow(x,3) + Math.pow(y,3) + Math.pow(z,3);
}
