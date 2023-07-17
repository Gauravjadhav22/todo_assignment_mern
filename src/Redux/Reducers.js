import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, GET_TODOS } from './Actions';

const initialState = [];

 const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((todo) => {
        
        if (todo._id === action.payload.id) {
         
          return { ...todo, completed: action.payload.completed };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload);
    case GET_TODOS:
      return state = action.payload;
    default:
      return state;
  }
};

export default todosReducer