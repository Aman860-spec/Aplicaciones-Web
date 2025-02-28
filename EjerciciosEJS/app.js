const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('index')
})

// Ruta para manejar el envío del formulario
app.post('/submit', (req, res) => {
    const { nombre} = req.body;
    res.render('resultado', { nombre});
});

app.post('/submit2', (req, res) => {
    let { radio } = req.body
    radio = parseFloat(radio)
    let perimetro = 2 * radio * 3.1416
    let area = radio * radio * 3.1416
    res.render('resultado2', { perimetro, area })
})

app.post('/submit3', (req, res) => {
    const {cal1, cal2, cal3, cal4} = req.body
    let promedio = (parseFloat(cal1) + parseFloat(cal2) + parseFloat(cal3) + parseFloat(cal4)) / 4.0
    res.render('resultado3', { promedio })
})

app.post('/submit4', (req, res) => {
    const { cm } = req.body
    let pulg = (parseFloat(cm)) / 2.54
    res.render('resultado4', { cm, pulg })
})

app.post('/submit5', (req, res) => {
    const {cata, catb} = req.body
    let hip = Math.sqrt((Math.pow(parseFloat(cata), 2) + Math.pow(parseFloat(catb), 2)))
    res.render('resultado5', {hip})
})

app.post('/submit6', (req, res) => {
    const { hora, horaMas } = req.body
    let horaFut = parseInt(hora) + parseInt(horaMas)

    if (horaFut >= 12 && horaMas > 0) {
        horaFut %= 12
    } else if (horaFut == 12) {
        horaFut = 0
    }
    res.render('resultado6', {hora, horaMas, horaFut})
})
app.post('/submit7', (req, res) => {
    const {edad} = req.body
    let edadHelper, decada, lustro, anio, mes, semana, dias, horas, minutos
    edadHelper = parseInt(edad)
    decada = edadHelper / 10;
    lustro = edadHelper / 5
    anio = edadHelper
    mes = edadHelper * 12
    semana = edadHelper * 52
    dias = edadHelper * 365
    horas = dias * 24
    minutos = horas * 60

    res.render('resultado7', {decada, lustro, anio, mes, semana, dias, horas, minutos})
})
app.post('/submit8', (req, res) => {
    const { lado } = req.body
    let area = Math.pow(parseFloat(lado), 2)

    res.render('resultado8', {lado, area})
})
app.post('/submit9', (req, res) => {
    const { base, altura } = req.body
    let area = (parseFloat(base) * parseFloat(altura)) / 2.0

    res.render('resultado9', {base, altura, area})
})

app.post('/submit10', (req, res)  => {
    let promedio = (19 + 17 + 21 + 9 + 12 + 7) / 6
    res.render('resultado10', { promedio })
})

app.post('/submit11', (req, res) => {
    const { kg } = req.body
    let lb = parseFloat(kg) * 2.2

    res.render('resultado11', { kg, lb })
})

app.post('/submit12', (req, res) => {
    const {n1, n2} = req.body
    let suma, resta, mult, div, n1h, n2h
    n1h = parseFloat(n1)
    n2h = parseFloat(n2)

    suma = n1h + n2h
    resta = n1h - n2h
    mult = n1h * n2h
    div = n1h / n2h

    res.render('resultado12', {n1, n2, suma, resta, mult, div})
    
})

app.post('/submit13', (req, res) => {
    const {hr} = req.body
    let sal, com, salcom, ims, ispt, salnet, hrH
    hrH = parseFloat(hr)

    sal = hrH * 50
    com = sal * 0.02
    salcom = sal + com
    ims = salcom * 0.015
    ispt = salcom * 0.012
    salnet = salcom - (ims + ispt)

    res.render('resultado13', {hr, sal, com, ims, salcom, ispt, salnet})
})

app.post('/submit14', (req, res) => {
    const {pies} = req.body
    let metros = parseFloat(pies) / 3.2808
    res.render('resultado14', { pies, metros})
})

app.post('/submit15', (req, res) => {
    const { pulg } = req.body
    let metro = parseFloat(pulg) / 39.370

    res.render('resultado15', { pulg, metro})
})

app.post('/submit16', (req, res) => {
    const { pies } = req.body
    let pulg = parseFloat(pies) * 12.0

    res.render('resultado16', { pies, pulg})
})

app.post('/submit17', (req, res) => {
    const {gln} = req.body
    let lt = parseFloat(gln) / 0.21997

    res.render('resultado17', {gln, lt})
})

app.post('/submit18', (req, res) => {
    const {gc} = req.body
    let gf = (parseFloat(gc) * 1.800) + 32.00

    res.render('resultado18', {gc, gf})
})
app.post('/submit19', (req, res) => {
    res.render('resultado19')
})
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
