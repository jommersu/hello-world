let arr = [1,3,7,1,4];
let item = 1;
let result = [];
let count = 0;
arr.forEach(function(element) {
    if(element === item){
        count ++;
    }
});
console.log(item + "出现的次数为" + count);
