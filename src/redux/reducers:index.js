// reducers/index.js
import { combineReducers } from 'redux';
import exerciseTypesReducer from './exerciseTypes';

const rootReducer = combineReducers({
  exerciseTypes: exerciseTypesReducer,
  // Add other reducers if needed
});

export default rootReducer;

// index.js
import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  // Add other reducers if needed
});

export default rootReducer;
