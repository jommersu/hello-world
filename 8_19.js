let arr = ['s', 'a', 's', 'b', 'a',1,'1',1];
console.log(get_no_repeat(arr));
function get_no_repeat(arr) {
    return [...new Set(arr)];
}