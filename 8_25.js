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