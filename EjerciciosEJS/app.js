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
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});