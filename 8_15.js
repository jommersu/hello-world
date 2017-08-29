/*

题目：统计数组 arr 中值等于 item 的元素出现的次数
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
要求：不要使用for循环
 */
let arr = [1,3,7,1,4];
let item = 1;
let count = 0;
arr.map(function (element) {
    if(item === element){
        count ++;
    }
    return count;
})
console.log(item + "出现的次数为" + count);

let num = arr.filter(ele => {
    return ele === item;
    }).length;
console.log(item + "出现的次数为" + num);


/*let result = [];
let count = 0;
arr.forEach(function(element) {
    if(element === item){
        count ++;
    }
});
console.log(item + "出现的次数为" + count);
*/