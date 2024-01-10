import { ADD_EXERCISE_TYPE } from './types';

export const addExerciseType = (exerciseType) => ({
  type: ADD_EXERCISE_TYPE,
  payload: exerciseType,
});