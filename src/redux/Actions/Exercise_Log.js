// ExerciseLogActions.js

export const logExercise = (exerciseData) => {
  return {
    type: 'LOG_EXERCISE',
    payload: exerciseData,
  };
};
