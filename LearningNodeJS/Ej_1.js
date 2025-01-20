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
    const name = await askQuestion(`Como te llamas?: `)
    console.log(`Hola ${name}, bienvenido!`)
    rl.close()
}

main()