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
    const hora = parseInt(await askQuestion('Dame la hora actual del reloj: '))
    const nHoras = parseInt(await askQuestion('Dame un numero entero de horas: '))

    let horaFut = hora + nHoras

    if(horaFut >= 12 && nHoras > 0) {
        horaFut %= 12
    } else if(horaFut == 12) {
        horaFut = 0
    }
    
    console.log(`Hora actual: ${hora}`)
    console.log(`Cantidad de horas: ${nHoras}`)
    console.log(`En ${nHoras}, el reloj marcara las ${horaFut}`)

    rl.close()
}

main()