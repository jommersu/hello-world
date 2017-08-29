/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 */
let str1 = 'abcsbaddbizdbas';
let str2 = 'aaaaabbdbdbb';
console.log(count(str1));
console.log(count(str2));
function count(str) {
    let result = [];
    let arr = str.split("");
    arr.forEach( ele => {
        if(!result.find( element => element.key === ele)) {
            result.push({key: ele, count: arr.filter(item => item === ele).length})
        }
    });
    let result2 = [];
    let obj = result.reduce( (a,b) => {
      if(a.count === b.count){
          result2.push(a,b);
          return a;
      }else {
          return a.count > b.count ? a: b;
      }
    });
    if(!result2.find( ele => ele === obj)){
        result2.push(obj);
    };
    let resultObj = {};
    result2.forEach( item => {
        resultObj[item.key] = item.count;
    });
    return resultObj;
}