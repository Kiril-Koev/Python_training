function gladiatorExpenses(a,b,c,d,e){
    let brokenHelmets = Math.floor(a/2);
    let brokenSwords = Math.floor(a/3);
    let brokenShileds = Math.floor(a/6);
    let brokenArmors = Math.floor(brokenShileds/2);

    let expenses = brokenHelmets*Number(b)+brokenSwords*Number(c)+brokenShileds*Number(d)+brokenArmors*Number(e)
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

// gladiatorExpenses(23,12.5,21.5,40,200)
