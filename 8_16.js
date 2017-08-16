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