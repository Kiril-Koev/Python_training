function Theatre(day,age){
    if(age<0 || age>122){
        console.log("Error!");
    }else if(day==="Weekday"){
        switch(true){
            case (0<=age && age<=18): console.log('12$'); break;
            case (18<age && age<=64): console.log('18$'); break;
            case (64<age && age<=122): console.log('12$'); break;
        }
    }else if(day==="Weekend"){
        switch(true){
            case (0<=age && age<=18): console.log('15$'); break;
            case (18<age && age<=64): console.log('20$'); break;
            case (64<age && age<=122): console.log('15$'); break;
        }
    }else if(day==="Holiday"){
        switch(true){
            case (0<=age && age<=18): console.log('5$'); break;
            case (18<age && age<=64): console.log('12$'); break;
            case (64<age && age<=122): console.log('10$'); break;
        }
    }
}

// Theatre("Weekday",-5)