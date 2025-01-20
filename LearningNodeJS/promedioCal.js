let cal1
let cal2
let cal3
let cal4





function getUserInput(n) {
    
    process.stdin.on('data', function(data) {
        if(n == 1) cal1 = parseInt(data.toString().trim())
        else if(n == 2) cal2 = parseInt(data.toString().trim())
        else if(n == 3) cal3 = parseInt(data.toString().trim())
        else  cal4 = parseInt(data.toString().trim())
        if (n < 4) {
            getUserInput(n + 1)
        } else {
            process.stdout.write("Promedio de las calificaciones " + ((cal1 + cal2 + cal3 + cal4) / 4))
            process.exit()
        }
    })
    
}
process.stdout.write("¿Dame tus calificaciones?\n");
getUserInput(1)