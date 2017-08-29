/*

题目：找出数组 arr 中重复出现过的元素
例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */
let arr = ['a','ab', 'ed', 'da', 'a', 'ed', 'b'];
let arr2 = [];
let result = [];
arr.forEach( item => {
    if(arr2.includes(item)){
        result.push(item);
    }else {
        arr2.push(item);
    }
});
console.log("重复出现的元素为：" + result);