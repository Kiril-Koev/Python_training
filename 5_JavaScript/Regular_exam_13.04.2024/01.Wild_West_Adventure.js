function WildWest_adventure(commands) {
    let numCharachters = Number(commands.shift())
    let team = {}

    for (let i = 0; i < numCharachters; i++) {
        let person = commands.shift().split(' ')
        let [personName, hitPoints, bullets] = person
        team[personName] = [hitPoints, bullets]
    }

    for (let command of commands) {
        if (command === 'Ride Off Into Sunset') {
            for (let key of Object.keys(team)) {
                console.log(`${key}\n HP: ${team[key][0]}\n Bullets: ${team[key][1]}`)
            }
        }

        let commandArr = command.split(' - ')

        if (commandArr.includes('FireShot')) {
            commandArr.shift()
            let [name, target] = commandArr

            if (team[name][1] > 0 ) {
                team[name][1] -=1
                console.log(`${name} has successfully hit ${target} and now has ${team[name][1]} bullets!`)
                
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
            }
        } else if (commandArr.includes('TakeHit')) {
            commandArr.shift()
            let [name, damage, attacker] = commandArr
            team[name][0] -= damage
            if (Number(team[name][0]) > 0){
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${team[name][0]} HP!`)
            }else{
                console.log(`${name} was gunned down by ${attacker}!`)
                delete team[name]
            }
            
        } else if (commandArr.includes('Reload')) {
            commandArr.shift()
            let [name] = commandArr
            
            if (Number(team[name][1])<6) {
                let bulletsReloded = 6-Number(team[name][1])
                console.log(`${name} reloaded ${bulletsReloded} bullets!`)
                team[name][1] = 6
            } else {
                console.log(`${name}'s pistol is fully loaded!`)
            }
        }else if (commandArr.includes('PatchUp')) {
            commandArr.shift()
            let [name, amount] = commandArr
            if((Number(team[name][0]) + Number(amount))<=100){
                team[name][0] = Number(team[name][0]) + Number(amount)
                console.log(`${name} patched up and recovered ${amount} HP!`)
                
            }else if((Number(team[name][0]) + Number(amount))>100){
                let recoveredAmount = 100 - Number(team[name][0])
                team[name][0] = 100
                console.log(`${name} patched up and recovered ${recoveredAmount} HP!`)
            }
            else if(Number(team[name][0])>100){
                console.log(`"${name} is in full health!`)
            }
        }
    }
}
WildWest_adventure(["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"])



