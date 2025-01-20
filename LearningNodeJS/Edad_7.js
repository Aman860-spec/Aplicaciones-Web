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
    const edad = parseInt(await askQuestion(`Cual es su edad: `))
    const decadas = edad / 10
    const lustro = edad / 5
    const anio = edad;
    const mes = anio * 12
    const semana = anio * 52
    const dias = anio * 365;
    const horas = dias * 24;
    const minuto = horas * 60;

    console.log(`Cuenta con ${decadas} decadas, ${lustro} lustros, ${anio} años, ${mes} meses, ${semana} semanas, ${dias} dias, ${horas} horas, ${minuto} minutos vividos.`)
}

main()