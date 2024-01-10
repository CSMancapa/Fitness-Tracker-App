// src/reducers/exerciseTypeReducer.js
const initialState = [];

const exerciseTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE_TYPE':
      return [...state, action.payload];
    // Add other actions if needed
    default:
      return state;
  }
};

export default exerciseTypeReducer;
