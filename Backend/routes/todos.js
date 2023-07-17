const express = require('express');
const router = express.Router();
const { createTodo, getTodos, updateTodo, deleteTodo,getTodo } = require('../controllers/todoController');

router.post('/', createTodo);

router.get('/', getTodos);
router.get('/:id', getTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;
