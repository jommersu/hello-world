    let i = 2;
    let num = 90;
    while(i <= num){
        if(num % i == 0){
            console.log(i);
            num /= i;
        }else{
            i++;
        }
    }
