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
    const gradosC = parseFloat(await askQuestion('Dame la temperatura en grados centigrados: '))
    let gradosF = (gradosC * 1.8) + 32

    console.log(`${gradosC} grados Centigrados en Fahrenheit: ${gradosF}`)
    rl.close()
}
main()