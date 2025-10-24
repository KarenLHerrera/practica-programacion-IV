const express = require('express');
const router = express.Router();
const { mostrarTodosUsuarios, mostrarUsuarioPorId, crearUsuario, actualizarUsuario, eliminarUsuario, activarUsuario } = require('../controllers/usuarios.controller');

router.get("/mostrartodos", mostrarTodosUsuarios);
router.get("/mostraruno/:idUsuario", mostrarUsuarioPorId);
router.post("/crear", crearUsuario);
router.put("/actualizar/:idUsuario", actualizarUsuario);
router.delete("/eliminar/:idUsuario", eliminarUsuario); //borrado físico
router.put("/activar/:idUsuario", activarUsuario); //borrado Lógico


module.exports = router;