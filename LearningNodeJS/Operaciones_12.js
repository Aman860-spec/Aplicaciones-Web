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
    const n1 = parseInt(await askQuestion('Dame el 1er numero: '))
    const n2 = parseInt(await askQuestion('Dame el 2do numero: '))

    let suma = n1 + n2
    let resta = n1 - n2
    let multiplicacion = n1 * n2
    let div = n1 / n2

    console.log(`${n1} + ${n2} = ${suma}, ${n1} - ${n2} = ${resta}, ${n1} * ${n2} = ${multiplicacion}, ${n1} / ${n2} = ${div}`)

    rl.close()
}

main()