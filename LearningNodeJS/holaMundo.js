var nom;
process.stdout.write("¿cuál es tu nombre? \n ");
process.stdin.on('data', function(data){
    nom = data.toString().trim();
    process.stdout.write("hola " + nom +", bienvenido a nodejs \n");
    process.exit();
});