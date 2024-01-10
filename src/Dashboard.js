// Dashboard.js
import React from 'react';

const Dashboard = ({ exerciseLog, exerciseTypes }) => {
  return (
    <div>
      <h2>Exercise Log</h2>
      <ul>
        {exerciseLog.map((exercise, index) => (
          <li key={index}>
            Date: {exercise.date}, Duration: {exercise.duration}, Type: {exercise.type}
          </li>
        ))}
      </ul>

      <h3>Exercise Types</h3>
      <ul>
        {exerciseTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

