console.log(fizzbuzz(15));
function fizzbuzz(n){
    let result = '';
    for(let i = 1; i<= n ; i++){
        if(i % 3 === 0){
            result +=  "fizz";
            if(i % 5 !== 0){
                result += "\n";
            }
        }
        if(i % 5 === 0){
            result += "buzz" + "\n";
        }
    }
    return result;
}