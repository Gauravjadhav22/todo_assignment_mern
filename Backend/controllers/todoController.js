const Todo = require('../models/todo');
const mongoose = require('mongoose');

const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};
const getTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
    console.log(id);
  
    
        const todo = await Todo.findOne({ _id: id });
    
        if (!todo) {
          return res.status(404).json({ error: 'Todo not found' });
        }
    
        res.json(todo);
      } catch (err) {
        next(err);
      }
};

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndRemove(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    next(err);
  }
};


module.exports={
    createTodo, getTodos, updateTodo, deleteTodo ,getTodo
}