import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync("backend/db.json");
        console.log("Archivo leído correctamente");
        return JSON.parse(data);
    } catch (e) {
        console.error("Error al leer el archivo JSON:", e.message);
        throw e; 
    }
};
const writeData = (data) => {
    try {
        fs.writeFileSync("backend/db.json", JSON.stringify(data));
    } catch (e) {
        console.error("Error al escribir el archivo JSON:", e.message);
    }
};

app.get("/libros", (req, res) => {
    const data = readData();
    res.json(data.libros);
});

app.get("/libros/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const libro = data.libros.find(libro => libro.id === id);
    res.json(libro || { error: "Libro no encontrado" });
});

app.post("/libros", (req, res) => {
    const data = readData();
    const body = req.body;
    const nuevoLibro = {
        id: data.libros.length + 1,
        ...body,
    }
    data.libros.push(nuevoLibro);
    writeData(data);
    res.json(nuevoLibro);
});

app.put("/libros/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const libroIndex = data.libros.findIndex(libro => libro.id === id);
    data.libros[libroIndex] = {
        ...data.libros[libroIndex],
        ...body,
    }
    writeData(data);
    res.json({ message: "Actualizado correctamente" });
});

app.delete("/libros/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const libroIndex = data.libros.findIndex(libro => libro.id === id);
    data.libros.splice(libroIndex, 1);
    writeData(data);
    res.json({ message: "Eliminado correctamente" });

})
app.listen('3002', () => {
    console.log("escuando en el puerto 3002");
})