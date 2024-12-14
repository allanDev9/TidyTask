import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync('backend/user.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
        return [];
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync('backend/user.json', JSON.stringify(data));
    } catch (error) {
        console.error('Error al escribir el archivo:', error.message);
    }
}
app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
})

app.get('/usuarios', (req, res) => {
    const data = readData();
    res.json({
        usuarios: data.usuarios,
    }
    );
})
app.get('/usuarios/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const usuario = data.usuarios.find(usuario => usuario.id === id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.json({ error: 'Usuario no encontrado' });
    }
})

app.post('/usuarios', (req, res) => {
    const data = readData();
    const body = req.body;
    const newUsuario = {
        id: data.usuarios.length + 1,
        ...body,
    }
    data.usuarios.push(newUsuario);
    writeData(data);
    res.json(newUsuario);
})

app.put('/usuarios/:id', (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const index = data.usuarios.findIndex(usuario => usuario.id === id);
    data.usuarios[index] = {
        ...data.usuarios[index],
        ...body,
    }
    writeData(data);
    res.json({
        message: 'Actualizado correctamente',
        nuevoUsuario: data.usuarios[index]
    });
})
app.delete('/usuarios/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const index = data.usuarios.findIndex(usuario => usuario.id === id);
    data.usuarios.splice(index, 1);
    writeData(data);
    res.json({
        message: 'Usuario eliminado correctamente',
        usuarioEliminado: data.usuarios[index]
    });
})
