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
    return item === x * x * x + y * y * y + z * z * z;
}
