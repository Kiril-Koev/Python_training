function MatchCalc(a,b,operator){
    let result;
    switch(operator){
        case '+': result = a+b; break;
        case '-': result = a-b; break;
        case '/': result = a/b; break;
        case '*': result = a*b; break;
        case '%': result = a%b; break;
        case '**': result = a**b; break;
    }
    console.log(result);
}

// MatchCalc(8,4,"*")