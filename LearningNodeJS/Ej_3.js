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
    let cal1, cal2, cal3, cal4
    cal1 = parseInt(await askQuestion(`Cual es la 1ra calificacion: `))
    cal2 = parseInt(await askQuestion(`Cual es la 2da calificacion: `))
    cal3 = parseInt(await askQuestion(`Cual es la 3ra calificacion: `))
    cal4 = parseInt(await askQuestion(`Cual es la 4ta calificacion: `))

    let promedio = (cal1 + cal2 + cal3 + cal4) / 4

    console.log(`El promedio de tus cuato calificaciones son: ${promedio}`)

    rl.close()
}

main()