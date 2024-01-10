// App.js
import React, { useState } from 'react';
import ExerciseLog from './ExerciseLog';
import Dashboard from './Dashboard';
import AddExerciseType from './AddExerciseType';
import { generateMockProgressData } from './MockData';
import ProgressVisualization from './ProgressVisualization';
import Header from './Header';
import './App.css';

const App = () => {
  const [exerciseLog, setExerciseLog] = useState([]);
  const [exerciseTypes, setExerciseTypes] = useState([]);
  const [progressData, setProgressData] = useState(generateMockProgressData(exerciseLog));

  const addExercise = (exercise) => {
  const updatedExerciseLog = [...exerciseLog, exercise];
  setExerciseLog(updatedExerciseLog);

  // Update progress data with new exercise
  const updatedProgressData = generateMockProgressData(updatedExerciseLog);
  setProgressData(updatedProgressData);
};

  const deleteExercise = (index) => {
    const updatedExerciseLog = [...exerciseLog];
    updatedExerciseLog.splice(index, 1);
    setExerciseLog(updatedExerciseLog);

    // Update progress data after deleting exercise
    const updatedProgressData = generateMockProgressData(updatedExerciseLog);
    setProgressData(updatedProgressData);
  };

  const addExerciseType = (type) => {
    setExerciseTypes([...exerciseTypes, type]);
  };

  return (
    <div className="App">
    <Header />
      <ExerciseLog
        exerciseLog={exerciseLog}
        addExercise={addExercise}
        deleteExercise={deleteExercise}
      />
      <Dashboard exerciseLog={exerciseLog} exerciseTypes={exerciseTypes} progressData={progressData} />
      <ProgressVisualization progressData={progressData} />
      <AddExerciseType addExerciseType={addExerciseType} />
    </div>
  );
};

export default App;
