const readline = require('node:readline')

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
    const answer = parseInt(await askQuestion(`Dame la unidad en CM: `))
    const pulgadas = answer / 2.54
    
    console.log(`${answer} en pulgadas son: ${pulgadas}`)

    rl.close()
}

main()