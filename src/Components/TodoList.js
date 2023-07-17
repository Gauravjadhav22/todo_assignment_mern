import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos, addTodo, toggleTodo, deleteTodo } from '../Redux/Actions';
import {getTodoList} from "../Redux/Selectors"
const TodoList = () => {
  const todos = useSelector(getTodoList);
  const dispatch = useDispatch();



  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  };

  const handleToggleTodo = (id) => {

    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='flex flex-col justify-around gap-3 items-center h-screen'>
   <div className='flex flex-col justify-start items-center overflow-x-scroll m-4 border-2 shadow h-full overflow-y-scroll md:overflow-x-hidden md:overflow-y-hidden p-4 min-w-fit '>

      {todos?.map((todo) => (
        <div className={`w-full flex items-center justify-between gap-4 text-lg shadow shadow-cyan-400 my-2 rounded p-2 ${todo.completed&&'opacity-25'}`} key={todo._id}>
          <input
            type="checkbox"
            className="w-6 h-6"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo._id)}
          />
          <span>{todo.title}</span>
          <button className='bg-red-500 text-white text-sm p-1 rounded' onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
        </div>
      ))}
   </div>

      <div className='mb-14'>
        
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(e.target.title.value);
        e.target.title.value = '';
      }}>
        <input className='shadow p-1' type="text" name="title" placeholder="Enter a todo" />
        <button className='text-white bg-green-500 p-1 text-sm' type="submit">Add Todo</button>
      </form>
      </div>

    </div>
  );
};

export default TodoList;
