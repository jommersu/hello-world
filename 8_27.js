let testNum1 = 12;
let testNum2 = 27;
let testNum3 = 120;
let testNum4 = 127;

console.log("numberis32134" + "解码次数" + getDecodeNumber(32134));
console.log("test" + testNum1 + "\n" + "次数：" + getDecodeNumber(testNum1));
console.log("test" + testNum2 + "\n" + "次数：" + getDecodeNumber(testNum2));
console.log("test" + testNum3 + "\n" + "次数：" + getDecodeNumber(testNum3));
console.log("test" + testNum4 + "\n" + "次数：" + getDecodeNumber(testNum4));

function getDecodeNumber(number) {
    let len = number.toString().length;
    let arr = [];
    if(len <= 2){
        return (decodeNum(number) + 1);
    }else {
        for(let i = 2; i <= len  ;i++){
            arr.push(Math.floor(number % (Math.pow(10 , i)) / Math.pow(10 ,(i - 2)))) ;
        }
    }
    let sum = arr.map( ele => decodeNum(ele)).reduce((sum , num) => {
        return sum + num;
    }, 0);
    return (sum + 1);
}

function decodeNum(number) {
    if(number <= 0){
        return 0;
    }else if(number <= 26){
        return 1;
    }else {
        return 0;
    }
}