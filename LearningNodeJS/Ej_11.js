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
    const pesoKg = parseFloat(await askQuestion('Dame el peso en KG: '))

    let pesoLb = pesoKg * 2.2

    console.log(`${pesoKg} = ${pesoLb}`)
    rl.close()
}

main()