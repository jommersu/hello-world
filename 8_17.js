let arr = [5, 3, 7, 1];
let result = arr.map( ele => {
    return Math.pow(ele, 2);
});
console.log("原数组为：" + arr);
console.log("新数组为：" + result);
