function SumDigits(number){

    let num = number.toString()
    let total_sum = 0

    for (i of num){
        total_sum += Number(i)
    }
    console.log(total_sum)
}

// SumDigits(245678)