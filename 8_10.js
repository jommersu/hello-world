let arr = [1,1,2,4,7,4,6,8,8,6,7];
let num = findNum(arr);
console.log("数组是："+arr);
console.log("只出现一次的数字是："+num);
function findNum(arr) {
    let result = []; // [{key:a, count :3}]
    let findnumber = 0;
    for(let item of arr){
        let obj = find(result, item);
        if(obj){
            obj.count++;
        }else{
            result.push({key:item, count:1});
        }
    }
    for(let item of result){
        if(item.count === 1){
            findnumber = item.key;
        }
    }
    return findnumber;
}
function find(result , number){
    for(let item of result){
        if(item.key === number){
            return item;
        }
    }
    return null;
}