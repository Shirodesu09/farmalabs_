import React from 'react';
import { PieChart, Pie, Cell, Text } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const data = [
  { name: 'Completed', value: 60, color: '#2ed47a' },
  { name: 'Active', value: 30, color: '#ffb946' },
  { name: 'Ended', value: 10, color: '#f7685b' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, percent, index }) => {
  if (index === 0) {
    return (
      <Text
        x={cx}
        y={cy}
        fill="#2ed47a"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={37}
        fontFamily='Poppins'
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </Text>
    );
  }
  return null;
};

const CircularProgressChart = () => {
  return (
    <div className="cir-container">
      <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <PieChart width={190} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100} 
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <ul style={{listStyle:'none'}} className='d-inline-block pt-5'>
        <li className='mb-2'>
          <span className="circle-icon">
            <FontAwesomeIcon color='#ffb946' icon={faCircle} size="xs" />
          </span>
          <span style={{fontSize:'10px',letterSpacing:1,fontFamily:'Poppins',fontWeight:600, marginLeft: '8px'}}>Active</span>
        </li>
        <li className='mb-2'>
          <span className="circle-icon">
            <FontAwesomeIcon icon={faCircle} style={{color:'#2ed47a'}} size="xs" />
          </span>
          <span style={{fontSize:'10px',letterSpacing:1,fontFamily:'Poppins',fontWeight:600, marginLeft: '8px'}}>Completed</span>
        </li>
        <li className='mb-2'>
          <span className="circle-icon">
            <FontAwesomeIcon icon={faCircle} style={{color:'#f7685b'}} size="xs" />
          </span>
          <span style={{fontSize:'10px',letterSpacing:1,fontFamily:'Poppins',fontWeight:600, marginLeft: '8px'}}>Ended</span>
        </li>
      </ul>
    </div>
  );
};

export default CircularProgressChart;