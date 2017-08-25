console.log(leftpad("hello", 20 ,'1'))
function leftpad(str ,len ,ch){
    let num = len - str.length;
    let arr = [];
    for(let i = 0;  i < num; i++){
        arr.push(parseInt(ch));
    }
    let result = arr.join('') + str;
    return result;
}