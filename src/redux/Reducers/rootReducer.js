// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import dashboardReducer from './Dashboard';
import exerciseLogReducer from './ExerciseLog';
import exerciseTypeReducer from './ExerciseType';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  exerciseLog: exerciseLogReducer,
  exerciseTypes: exerciseTypeReducer,
  // Add other reducers here
});

export default rootReducer;
