function CookingNumber(number,...commands){
    
    actions = {
        chop: (num) => num/2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num+1,
        bake: (num) => num*3,
        fillet: (num) => num - 0.2*num
    }

    for (let i of commands){
        number = actions[i](number)
        console.log(number)
    }
}

// CookingNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop')