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
    const base = parseFloat(await askQuestion('Dame la base del triangulo: '))
    const altura = parseFloat(await askQuestion('Dame la altura del triangulo: '))

    let area = (base * altura) / 2

    console.log(`El area de este triangulo es: ${area}`)

    rl.close()
}

main()