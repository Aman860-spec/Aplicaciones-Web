let medida

process.stdout.write("Dame la cantidad en centimetros: ")
process.stdin.on("data", function(data) {
    medida = parseFloat(data.toString().trim())
    process.stdout.write(medida + "CM en pulgadas es " + (medida / 2.54))
    process.exit()
})