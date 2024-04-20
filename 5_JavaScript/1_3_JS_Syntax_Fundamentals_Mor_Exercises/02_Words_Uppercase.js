function solve(text){
    let splitString = text.match(/\w+/g)
    
    let combinedString = []
    
    for (let word of splitString) {
        combinedString.push(word.toUpperCase())
    }
    
    console.log(combinedString.join(', '))
}

// solve('Hi, how are you?')