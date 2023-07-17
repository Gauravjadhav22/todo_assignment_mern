import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  todosReducer from './Redux/Reducers';

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
