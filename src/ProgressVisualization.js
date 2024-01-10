import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProgressVisualization = ({ progressData }) => {
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
    </div>
  );
};

export default ProgressVisualization;
