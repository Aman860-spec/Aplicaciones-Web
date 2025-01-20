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
    const horas = parseFloat(await askQuestion('Cuantas horas trabajo el obrero: '))

    let salario = (horas * 50)
    let comp = (salario * 0.02)
    let sComp = salario + comp
    let ims = sComp * 0.015
    let ispt = sComp * 0.012
    let sNeto = sComp - (ims + ispt)

    console.log(`Pago de horas trabajadas: ${salario}`)
    console.log(`Compensacion: ${comp}`)
    console.log(`Salario y Compensacion: ${sComp}`)
    console.log(`Descuento IMSS: ${ims}`)
    console.log(`Descuento ISPT: ${ispt}`)
    console.log(`Salario neto: ${sNeto}`)
    rl.close()
}

main()