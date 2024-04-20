function PrintAndSum(m,n){
    let result = []
    let sum_ = 0
    
    for (let i=m; i <= n; i++){
        result.push(i);
    }

    for (let x of result){
        sum_ += x
    }

    console.log(result.join(' '));
    console.log(`Sum: ${sum_}`);
}


// PrintAndSum(5,10)