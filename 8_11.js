let str = "1->2->3->3->4->5->3";
let val = 3;
let chain = delete_three(str);
console.log("原始链表：" + str);
console.log("删除链表中的3：" + chain);
function delete_three(str,val){
    let result_chain = "";
    let result_arr = [];
    let arr = [];
    arr = str.split("->");
    for(let item of arr){
        if(item !== '3'){
            result_arr.push(item);
        }
    }
    let len = result_arr.length;
    for(let i = 0; i < len - 1; i ++){
        result_chain += result_arr[i] + "->";
    }
    result_chain += result_arr[len - 1];
    return result_chain;
}