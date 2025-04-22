"use client";
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TwoLineGraph() {
  const [data,  setData] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/heart/v1/api/analytic/relation`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data)
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
    
  }, [])

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" label={{ value: 'Hour', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="speed" stroke="#FF5C5F" strokeWidth={2} name="Speed" />
        <Line type="monotone" dataKey="heartrate" stroke="#1E90FF" strokeWidth={2} name="Heart Rate" />
      </LineChart>
    </ResponsiveContainer>
  );
}
