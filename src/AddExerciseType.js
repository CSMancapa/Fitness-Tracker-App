// AddExerciseType.js
import React, { useState } from 'react';

const AddExerciseType = ({ addExerciseType }) => {
  const [newExerciseType, setNewExerciseType] = useState('');

  const handleInputChange = (e) => {
    setNewExerciseType(e.target.value);
  };

  const handleSubmit = () => {
    // Validate input if needed

    // Call the addExerciseType function passed as a prop
    addExerciseType(newExerciseType);

    // Reset input field
    setNewExerciseType('');
  };

  return (
    <div>
      <h2>Add Exercise Type</h2>
      <input
        type="text"
        value={newExerciseType}
        onChange={handleInputChange}
        placeholder="New Exercise Type"
      />
      <button onClick={handleSubmit}>Add Exercise Type</button>
    </div>
  );
};

export default AddExerciseType;
