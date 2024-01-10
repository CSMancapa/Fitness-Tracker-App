// MockData.js
const generateMockExerciseLog = [
  { date: '2022-01-01', duration: 30, type: 'Running' },
  { date: '2022-01-02', duration: 45, type: 'Weightlifting' },
  // ... add more mock entries as needed
];

const calculateTotalDuration = (exerciseLog, currentDate) => {
  const filteredExercises = exerciseLog.filter((exercise) => exercise.date === currentDate);

  return filteredExercises.reduce((total, exercise) => {
    return total + parseInt(exercise.duration, 10);
  }, 0);
};

const calculateTotalDistance = (exerciseLog, currentDate) => {
  const filteredExercises = exerciseLog.filter((exercise) => exercise.date === currentDate);

  return filteredExercises.reduce((total, exercise) => {
    return total + parseInt(exercise.distance, 10) || 0;
  }, 0);
};

const calculateAverageHeartRate = (exerciseLog, currentDate) => {
  const filteredExercises = exerciseLog.filter((exercise) => exercise.date === currentDate);

  const totalHeartRate = filteredExercises.reduce((total, exercise) => {
    return total + parseInt(exercise.heartRate, 10) || 0;
  }, 0);

  const averageHeartRate = totalHeartRate / filteredExercises.length || 0;
  return Math.round(averageHeartRate);
};

const calculateTotalCalories = (exerciseLog, currentDate) => {
  const filteredExercises = exerciseLog.filter((exercise) => exercise.date === currentDate);

  console.log('Filtered Exercises for Calories on', currentDate, ':', filteredExercises);

  const totalCalories = filteredExercises.reduce((total, exercise) => {
    const calories = parseInt(exercise.caloriesBurnt, 10) || 0;
    console.log('Calories for exercise on', currentDate, ':', calories);
    return total + calories;
  }, 0);

  console.log('Total Calories on', currentDate, ':', totalCalories);
  return totalCalories;
};

const generateMockProgressData = (exerciseLog = []) => {
  const uniqueExerciseLog = [...new Set(exerciseLog.map((exercise) => exercise.date))];
  const allExerciseLog = [...generateMockExerciseLog, ...exerciseLog];

  return uniqueExerciseLog.map((date) => ({
    date,
    totalDuration: calculateTotalDuration(allExerciseLog, date),
    totalDistance: calculateTotalDistance(allExerciseLog, date),
    averageHeartRate: calculateAverageHeartRate(allExerciseLog, date),
    totalCalories: calculateTotalCalories(allExerciseLog, date),
  }));
};

export { generateMockExerciseLog, generateMockProgressData };
