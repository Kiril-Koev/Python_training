function Largest(a,b,c){
    let result;
    if (a>b && a>c){
        result = a;
    }else if (b>a && b>c){
        result = b;
    }else if (c>a && c>b){
        result = c;
    }
    console.log(`The largest number is ${result}.`);
}

// Largest(1,2,3);