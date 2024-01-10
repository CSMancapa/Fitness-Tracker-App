// ExerciseLog.js
// ExerciseLog.js
import React, { useState } from 'react';

const ExerciseLog = ({ exerciseLog = [], addExercise, deleteExercise }) => {
  const [newExercise, setNewExercise] = useState({
    date: '',
    duration: '',
    type: '',
    distance: '',
    heartRate: '',
    caloriesBurnt: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({
      ...newExercise,
      [name]: value,
    });
  };

  const handleAddExercise = () => {
    addExercise(newExercise);
    setNewExercise({
      date: '',
      duration: '',
      type: '',
      distance: '',
      heartRate: '',
      caloriesBurnt: '',
    });
  };

  const handleDeleteExercise = (index) => {
    deleteExercise(index);
  };

  return (
    <div>
      <h2>Exercise Log</h2>
      <ul>
        {exerciseLog.map((exercise, index) => (
          <li key={index}>
            {exercise.date} - {exercise.duration} minutes - {exercise.type} - 
            Distance: {exercise.distance} km - Heart Rate: {exercise.heartRate} bpm - Calories Burnt: {exercise.caloriesBurnt}
            <button onClick={() => handleDeleteExercise(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add Exercise</h3>
        <label>Date:</label>
        <input type="text" name="date" value={newExercise.date} onChange={handleInputChange} />
        <label>Duration (minutes):</label>
        <input type="text" name="duration" value={newExercise.duration} onChange={handleInputChange} />
        <label>Exercise Type:</label>
        <input type="text" name="type" value={newExercise.type} onChange={handleInputChange} />
        <label>Distance (km):</label>
        <input type="text" name="distance" value={newExercise.distance} onChange={handleInputChange} />
        <label>Heart Rate (bpm):</label>
        <input type="text" name="heartRate" value={newExercise.heartRate} onChange={handleInputChange} />
        <label>Calories Burnt (cal):</label>
        <input type="text" name="caloriesBurnt" value={newExercise.caloriesBurnt} onChange={handleInputChange} />
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
    </div>
  );
};

export default ExerciseLog;
