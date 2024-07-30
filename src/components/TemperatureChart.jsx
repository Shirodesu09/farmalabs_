import React, { useState } from 'react';
import './TemperatureChart.css';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip
} from 'recharts';
import Dropdown from './Dropdown';

const data = [
  { date: '1 Apr', temperature: 10 },
  { date: '8 Apr', temperature: 30 },
  { date: '16 Apr', temperature: 15 },
  { date: '29 Apr', temperature: 28 },
];

const CustomDot = ({ cx, cy, isTooltipActive }) => {
  if (!isTooltipActive) {
    return null;
  }

  return (
    <circle cx={cx} cy={cy} r={5} stroke="#ff7300" strokeWidth={2} fill="#ffffff" />
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label bg-black bg-opacity-75 rounded-5 ps-2 pe-2 text-light">{`${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
};

function TemperatureChart() {
  const [tempDuration, setTempDuration] = useState("Monthly");

  const handleTempDuration = (data) => {
    setTempDuration(data);
  };
  console.log(tempDuration)

  return (
    <div className="chart-container">
      <div className='user-temp'>
        <h5 style={{color:'#192A3E',fontWeight:500 ,lineHeight:0.8,fontSize:20,paddingLeft:5}}>Temperature Per User</h5>
        <Dropdown handleTempDuration={handleTempDuration} options={['Monthly', 'Yearly']} />
      </div>
      <hr />
      <ResponsiveContainer style={{padding:'10px 0'}} width="100%" height="90%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="8 8" vertical={false} />
          <XAxis axisLine={{ strokeDasharray: '8 8', fill: '#4C5862', opacity: 0.2 }} tickMargin={10} interval={0} textAnchor="middle" dataKey="date" tick={{ fill: '#4C5862', fontSize: 12 }} tickLine={false} />
          <YAxis axisLine={false} domain={[0, 40]} tick={{ fill: '#4C5862' }} tickFormatter={(value) => `${value}°C`} tickLine={false} />
          <Tooltip cursor={false} isAnimationActive={false} content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="temperature"
            stroke="#ff7300"
            strokeWidth={2}
            fill="#F2B54B"
            fillOpacity={0.2}
            activeDot={{ r: 8 }}
            dot={(props) => <CustomDot {...props} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;
