import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos} from './Redux/Actions';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoList from './Components/TodoList';
import NotFound from './Components/NotFound';

import {getTodoList} from "./Redux/Selectors"

function App() {
  const todos = useSelector(getTodoList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    console.log(todos);
  },[]);
  return (
    <Routes>
      <Route path='/' element={<TodoList/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
