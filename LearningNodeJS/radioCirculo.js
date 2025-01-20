const PI = 3.1416
let nom
console.log("Dame el radio de un circulo")
process.stdin.on('data', function(data){
    nom = data.toString().trim()
    nom = parseInt(nom)
    console.log("El area de este circulo es " + ((nom * nom) *PI) )
    console.log("El perimetro de este circulo es " + (2 * nom * PI))
    // process.stdout.write("hola " + nom +", bienvenido a nodejs \n");
    process.exit();
});