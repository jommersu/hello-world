/*
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环
 */
let arr = [1, 3, 7, 1 ,4,];
let item = 1;
getIndex(arr, item);
function getIndex(arr, item) {
    let flag = 0;
    arr.forEach( ele => {
        if(ele === item){
            let result = arr.indexOf(1, flag);
            flag += result + 1;
            console.log(item + "的位置是：" + result);
        }
    });

}