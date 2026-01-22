import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Hola desde el contenedor Docker del Backend!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});