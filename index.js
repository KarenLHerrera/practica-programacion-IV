const express = require('express');
const connection = require('./config/config.js');
const usuariosRoutes = require('./routes/usuarios.routes');
const dotenv = require('dotenv');

dotenv.config(); //* cargar variables de entorno *//
const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connection.connect((error) => {
    if (error) {
        console.error('Error de conexión a la base de datos: ', error);
        return;
    }

    console.log('Conexión a la base de datos establecida.');
});

// Middleware para parsear JSON
app.use(express.json());
// Rutas
app.use('/api/usuarios', usuariosRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});