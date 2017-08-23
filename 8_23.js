let arr1 = [1,2,[1,2]];
let arr2 =  [1,2,[1,2],[3,4]];
let arr3 =  [4,[3,[2,[1]]]];
console.log(getArr(arr1));
console.log(getArr(arr2));
console.log(getArr(arr3));
function getArr(arr) {
    let newArr = arr.toString().split(",");
    let result = newArr.map( ele => parseInt(ele));
    return result;
}