/*
给定一个未排序的整数数组，找到其中位数。
function XXX(arr){}
 */
let arr1 = [3,6,2,7,9];
console.log("数组为：" + arr1);
let result1 = get_median(arr1);
console.log("中位数为" + result1);
let arr2 = [7,8,3,5,2,9];
console.log("数组为：" + arr2);
let result2 = get_median(arr2);
console.log("中位数为：" + result2);
function get_median(arr){
     let sortArr = arr.sort(sortNum);
     let len = sortArr.length;
     let median = 0;
     if(sortArr.length % 2 === 0){
          median = (sortArr[len / 2 - 1] + sortArr[len / 2]) / 2;
     
    }else{
        median = sortArr[(len - 1) / 2];
}
     return median;
}

function sortNum(a,b){
    return a - b;
}