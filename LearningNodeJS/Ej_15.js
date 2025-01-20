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
    const pulgada = parseFloat(await askQuestion('Dame la medida en pulgadas: '))
    let metro = pulgada * 0.0254

    console.log(`${pulgada}in a metros: ${metro}M`)
    rl.close()
}

main()