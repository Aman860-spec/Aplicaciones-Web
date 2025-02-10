const express = require("express");
const app = express();
app.use(express.json());
let clases = [
    { id: 1, nombre: "Yoga", cupo: 10 },
    { id: 2, nombre: "CrossFit", cupo: 8 },
    { id: 3, nombre: "Pilates", cupo: 12 }
];
let reservas = [];
// Ruta para obtener todas las clases disponibles
app.get("/clases", (req, res) => {
    res.json(clases);
});
app.get("/reservas", (req, res) => {
    res.json(reservas)
})
// Ruta para reservar una clase
app.post("/reservar", (req, res) => {
    const { nombre, claseId } = req.body;
    const clase = clases.find(c => c.id === claseId);
    
    if (clase && clase.cupo > 0) {
        clase.cupo--;
        const reserva = { id: reservas.length + 1, nombre, claseId };
        reservas.push(reserva);
        res.json({ mensaje: "Reserva exitosa", reserva });
    } else {
        res.status(400).json({ mensaje: "No hay cupo disponible o clase no encontrada" });
    }
});
// Ruta para cancelar una reserva
app.delete("/cancelar/:id", (req, res) => {
    const reservaId = parseInt(req.params.id);
    const reservaIndex = reservas.findIndex(r => r.id === reservaId);
    
    if (reservaIndex !== -1) {
        const reserva = reservas.splice(reservaIndex, 1)[0];
        const clase = clases.find(c => c.id === reserva.claseId);
        if (clase) clase.cupo++;
        res.json({ mensaje: "Reserva cancelada", reserva });
    } else {
        res.status(404).json({ mensaje: "Reserva no encontrada" });
    }
});
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
