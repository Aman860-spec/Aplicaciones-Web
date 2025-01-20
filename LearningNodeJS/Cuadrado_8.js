const { resolve } = require('path')
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
    const l = parseFloat(await askQuestion('Dame un lado de un cuadrado: '))

    const area = l * l
    const perimetro = 4 * l

    console.log(`El area del cuadrado es: ${area}, y su perimetro es: ${perimetro}`)
    rl.close()
}

main()