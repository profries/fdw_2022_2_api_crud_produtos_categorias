const express = require('express');
const categoriaController = require('../controller/categoria_controller')

const router = express.Router();
//Rota do recurso: "/api/categorias"

router.get('/', categoriaController.listar)
router.post('/', categoriaController.inserir)
router.get('/:id', categoriaController.buscarPorId)
router.put('/:id', categoriaController.atualizar)
router.delete('/:id', categoriaController.deletar)

module.exports = router;