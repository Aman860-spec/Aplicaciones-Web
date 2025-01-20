const readline = require("readline")

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
    const cata = parseInt(await askQuestion(`Dame la longitud del cateto a: `))
    const catb = parseInt(await askQuestion(`Dame la longitud del cateto b: `))

    const hip = Math.sqrt((Math.pow(cata, 2) + Math.pow(catb, 2)))

    console.log(`La hipotenusa del triangulo es: ${hip}`)

    rl.close()
}

main()