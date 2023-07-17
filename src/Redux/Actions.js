// actions.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/todos';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODOS = 'GET_TODOS';

export const addTodo = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, { title });
      dispatch({
        type: ADD_TODO,
        payload: response.data,
      });
    } catch (error) {
      // Handle error
    }
  };
};
export const getTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiUrl);

      dispatch({
        type: GET_TODOS,
        payload: response.data,
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const toggleTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`);
      const todo = response.data;
      const updatedTodo = { ...todo, completed: !todo.completed };
      console.log(updatedTodo);
      await axios.put(`${apiUrl}/${id}`, updatedTodo);
      dispatch({
        type: TOGGLE_TODO,
        payload: { id, completed: updatedTodo.completed },
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      // Handle error
    }
  };
};
