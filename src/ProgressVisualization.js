// ProgressVisualization.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ProgressVisualization.css';

const ProgressVisualization = ({ progressData }) => {
  console.log(progressData);
  return (
    <div>
      {/* Duration Chart */}
      <div>
        <LineChart width={800} height={400} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Duration (min)" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Distance Chart */}
      <div>
        <LineChart width={800} height={400} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Distance (km)" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Heart Rate Chart */}
      <div>
        <LineChart width={800} height={400} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Avg Heart Rate (bpm)" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Calories Chart */}
      <div>
        <LineChart width={800} height={400} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Calories (cal)" stroke="#ff7300" />
        </LineChart>
      </div>
    </div>
  );
};

export default ProgressVisualization;
