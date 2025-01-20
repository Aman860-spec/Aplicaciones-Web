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
    const pies = parseFloat(await askQuestion('Dame la medida en pies: '))
    let metros = pies / 3.2808

    console.log(`${pies} a metros: ${metros}M`)

    rl.close()
}
main()