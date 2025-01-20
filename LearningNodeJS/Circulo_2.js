const readline = require('node:readline')
const PI = 3.1416

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
    const radio = await askQuestion(`Dame el radio de un circulo: `)
    let perimetro = 2 * radio * PI
    let area = radio * radio * PI
    console.log(`Perimetro: ${perimetro}, Area: ${area}`)
    rl.close()
}

main()