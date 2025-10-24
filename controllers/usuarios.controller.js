const connection = require('../config/config.js');


// Mostrar todos los usuarios
const mostrarTodosUsuarios = (req, res) => {
    const query = "SELECT * FROM usuarios";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
        res.json(results);
    });
}
// Mostrar un usuario por ID
const mostrarUsuarioPorId = (req, res) => {
    const { idUsuario } = req.params;
    const query = "SELECT * FROM usuarios WHERE idUsuario = ?";
    connection.query(query, [idUsuario], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener el usuario' });
        }
        res.json(results[0]);
    });
}

// Crear un nuevo usuario
const crearUsuario = (req, res) => {
    const { username, pass, rol } = req.body;
    const query = "INSERT INTO usuarios (username, pass, rol) VALUES (?, ?, ?)";
    connection.query(query, [username, pass, rol], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al crear el usuario' });
        }
        res.status(201).json({ id: results.insertId, username, rol });
    });
}

// Actualizar un usuario existente
const actualizarUsuario = (req, res) => {
    const { idUsuario } = req.params;
    const { username, pass, rol } = req.body;
    const query = "UPDATE usuarios SET username = ?, pass = ?, rol = ? WHERE idUsuario = ?";
    connection.query(query, [username, pass, rol, idUsuario], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
        res.json({ id: idUsuario, username, rol });
    });
}

// Eliminar un usuario (borrado físico)
const eliminarUsuario = (req, res) => {
    const { idUsuario } = req.params;
    const query = "DELETE FROM usuarios WHERE idUsuario = ?";
    connection.query(query, [idUsuario], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    });
}

// Activar un usuario (borrado lógico)
const activarUsuario = (req, res) => {
    const { idUsuario } = req.params;
    const query = "UPDATE usuarios SET activo = ? WHERE idUsuario = ?";
    connection.query(query, [0, idUsuario], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al activar el usuario' });
        }
        res.json({ message: 'Usuario activado correctamente' });
    });

}

module.exports = {
    mostrarTodosUsuarios,
    mostrarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    activarUsuario
};