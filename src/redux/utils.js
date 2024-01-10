// utils.js
export const generateMockData = () => {

  const exerciseLogs = [
    {timestamp: 'Week 1', duration: 30, distance: 3},
    {timestamp: 'Week 2', duration: 45, distance: 4},
    ];
  return {
    caloriesBurntPerWeek: Math.floor(Math.random() * 1000) + 500,
    averageHeartRate: Math.floor(Math.random() * 40) + 60,
    distanceCovered: (Math.random() * 10).toFixed(2),
    duration: Math.floor(Math.random() * 120) + 30, // Assuming duration is in minutes
    exerciseLogs,
  };
};

