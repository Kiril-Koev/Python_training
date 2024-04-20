// Switch case
// function calculator(a, operator, b){
//     let result;
//     switch(operator){
//         case '+': result = a+b; break;
//         case '-': result = a-b; break;
//         case '/': result = a/b; break;
//         case '*': result = a*b; break;
        
//     }
//     console.log(result.toFixed(2));
// }

// Arrow functions
function calculator(a, operator, b){
    let operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2
    }

    console.log(operators[operator](a, b).toFixed(2))
}


// calculator(5,'+',10)