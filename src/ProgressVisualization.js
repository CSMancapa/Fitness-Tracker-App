import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProgressVisualization = ({ progressData }) => {
  console.log(progressData);

  return (
    <div>
      {/* Duration Chart */}
      <LineChart width={800} height={400} data={progressData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalDuration" stroke="#8884d8" />
      </LineChart>

      {/* Distance Chart */}
      <LineChart width={800} height={400} data={progressData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalDistance" stroke="#82ca9d" />
      </LineChart>

      {/* Heart Rate Chart */}
      <LineChart width={800} height={400} data={progressData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="averageHeartRate" stroke="#8884d8" />
      </LineChart>

      {/* Calories Chart */}
      <LineChart width={800} height={400} data={progressData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalCalories" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default ProgressVisualization;
