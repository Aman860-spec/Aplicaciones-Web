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
    const pies = parseFloat(await askQuestion('Dame la longitud en pies: '))
    let pulgadas = pies * 12

    console.log(`${pies} pies a pulgadas: ${pulgadas} in`)

    rl.close()
}

main()