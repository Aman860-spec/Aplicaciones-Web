const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const main = async () => {
    const galones = parseFloat(await askQuestion('Dame la cantidad en galones: '))
    let litros = galones / 0.21997

    console.log(`${galones} galones a litros es: ${litros}`)

    rl.close()
}
main()