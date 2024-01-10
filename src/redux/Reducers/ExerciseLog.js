// src/reducers/exerciseLogReducer.js
const initialState = [];

const exerciseLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return [...state, action.payload];
    case 'DELETE_EXERCISE':
      // Implement logic to delete an exercise
      return state.filter((exercise, index) => index !== action.payload);
    default:
      return state;
  }
};

export default exerciseLogReducer;
