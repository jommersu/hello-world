/*
将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].

function XXX(arr,elem){ }

参数：
arr:数组
elem:某个元素
 */
let nums = [0,1,0,3,12];
let target = 0;
console.log(newArr(nums, target));
function newArr(arr, elem) {
    let index = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elem){
            index.push( i > 0 ? (i-1) : i);
        }
    }
    for(let i = 0; i < index.length; i++){
        let num = arr.splice(index[i], 1);
        arr.push(num[0]);
    }
    return arr;
}