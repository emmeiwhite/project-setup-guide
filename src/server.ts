function restart(server: string) {
    console.log('Server restarted!', server)
}

restart('Express')

const totalSavings = 4000

function addMoney(deposit: number) {
    return totalSavings + deposit
}

addMoney(50000)

const person = {
    name: 'Rafia',
}

console.log(person.name)
