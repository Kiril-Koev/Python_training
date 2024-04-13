function Vacation(number, group, day){
    
    let cost=0;
    let price=0;
    let discount=0;

    if(group==="Students"){
        if(number>=30){
            discount = 0.15
        }
        
        switch(true){
            case (day==='Friday'): price = 8.45; break;
            case (day==='Saturday'): price = 9.80; break;
            case (day==='Sunday'): price = 10.46; break;
        }
        cost = price*number-discount*price*number

    }else if(group==="Business"){
        if(number>=100){
            number = number - 10
        }
        
        switch(true){
            case (day==='Friday'): price = 10.90; break;
            case (day==='Saturday'): price = 15.60; break;
            case (day==='Sunday'): price = 16.00; break;
        }
        cost = price*number
    }else if(group==="Regular"){
        if(number>=10 && number<=20){
            discount = 0.05
        }

        switch(true){
            case (day==='Friday'): price = 15.00; break;
            case (day==='Saturday'): price = 20.00; break;
            case (day==='Sunday'): price = 22.50; break;
        }
        cost = price*number-discount*price*number
    }
    console.log(`Total price: ${cost.toFixed(2)}`)
}

// Vacation(30, "Students", "Sunday")