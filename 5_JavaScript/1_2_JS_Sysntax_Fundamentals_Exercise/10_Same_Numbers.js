function SameNumbers(number){
    let num = number.toString();
    let digits = num.split('');
    let totalSum = Number(digits[0]);
    let if_status = true;
    let else_status = true;
    for (i=1; i<(digits.length);i++){
        if (digits[i-1]==digits[i]){
            if_status = true;
        }else{
            else_status = false
        }  
        totalSum += Number(digits[i]);
        }
    console.log(if_status&&else_status)
    console.log(totalSum);
    }

// SameNumbers(22222)