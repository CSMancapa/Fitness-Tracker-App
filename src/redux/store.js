// src/store.js
import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

export default store;
