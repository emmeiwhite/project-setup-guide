function restart(server: string) {
    console.log('Server restarted!', server)
}

restart('Express')

let totalSavings = 4000
function addMoney(deposit: number) {
    return totalSavings + deposit
}

addMoney(50000)
