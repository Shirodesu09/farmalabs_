import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip
} from 'recharts';
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './Analytics.css'
import DatePicker from './DatePicker';


function Analytics() {
  const dataTemp = [
    { date: 'Dec', temperature: 8 },
    { date: 'Mar', temperature: 18 },
    { date: 'May', temperature: 32 },
    { date: 'Jul', temperature: 12 },
    { date: 'Sep', temperature: 25 },
    { date: 'Nov', temperature: 28 },
  ];
  const dataHum = [
    { date: 'Dec', Humidity: 18 },
    { date: 'Mar', Humidity: 48 },
    { date: 'May', Humidity: 64 },
    { date: 'Jul', Humidity: 24 },
    { date: 'Sep', Humidity: 50 },
    { date: 'Nov', Humidity: 56 },
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
  const CustomTooltip2 = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label bg-black bg-opacity-75 rounded-5 ps-2 pe-2 text-light">{`${payload[0].value}%`}</p>
        </div>
      );
    }
  
    return null;
  };
  const tempC=35
  const percentageHum=80
  return (
    <div className='container-fluid pt-0'>
        <div className="row px-4" style={{fontSize:'24px',fontFamily:'Roboto',fontWeight:'400',letterSpacing:'2.16px',lineHeight:'28.13px'}}>
            <div className="col-6">
                <p>Temperature</p>
            </div>
            <div className="col-6">
                <p>Humidity</p>
            </div>
        </div>
        <div className='row mx-4 pt-1' style={{height:'347px'}}>
          <div className="col-6 w-50">
              <ResponsiveContainer className='bg-white p-3' width="100%" height='100%'>
                  <AreaChart data={dataTemp}>
                      <CartesianGrid strokeDasharray="0 0" vertical={true} />
                      <XAxis 
                      axisLine={{ strokeDasharray: '8 8', fill: '#4C5862', opacity: 0.2 }} 
                      tickMargin={10} interval={0} 
                      textAnchor="middle" dataKey="date" 
                      tick={{ fill: '#4C5862', fontSize: 12 }} 
                      tickLine={false} 
                      />
                      <YAxis 
                      axisLine={false} 
                      domain={[0, 40]} 
                      tick={{ fill: '#4C5862' }} 
                      tickFormatter={(value) => `${value}°C`} 
                      tickLine={false} 
                      />
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
          <div className="col-6 w-50">
              <ResponsiveContainer className='bg-white p-3' width="100%" height='100%'>
                  <AreaChart data={dataHum}>
                      <CartesianGrid strokeDasharray="0 0" vertical={true} />
                      <XAxis 
                      axisLine={{ strokeDasharray: '8 8', fill: '#4C5862', opacity: 0.2 }} 
                      tickMargin={10} interval={0} 
                      textAnchor="middle" dataKey="date" 
                      tick={{ fill: '#4C5862', fontSize: 12 }} 
                      tickLine={false} 
                      />
                      <YAxis 
                      axisLine={false} 
                      domain={[0, 100]} 
                      tick={{ fill: '#4C5862' }} 
                      tickFormatter={(value) => `${value}%`} 
                      tickLine={false} 
                      />
                      <Tooltip cursor={false} isAnimationActive={false} content={<CustomTooltip2 />} />
                      <Area
                      type="monotone"
                      dataKey="Humidity"
                      stroke="#2D9CDB"
                      strokeWidth={2}
                      fill="#2D9CDB"
                      fillOpacity={0.2}
                      activeDot={{ r: 8 }}
                      dot={(props) => <CustomDot {...props} />}
                      />
                  </AreaChart>
              </ResponsiveContainer>
          </div>
        </div>
        <div className="row mx-5 pt-1 mt-3" style={{maxHeight:'400px',overflow:'hidden'}}>
          <div className="col-3 rounded-4 px-0" style={{background:'#3c444c'}}>
            <div className='text-end'>
              <img className='m-3' src="/dots.png" alt="" />
            </div>
            <div className='text-center'>
              <p className='text-white mb-0' style={{fontFamily:'Zilla Slab',fontSize:'28px',fontWeight:400,letterSpacing:'1px'}}>Temprature</p>
            </div>
              <div className='w-50 pb-5 mx-auto'>
                <svg style={{ height: 0 }}>
                  <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                      <stop offset="64%" stopColor="#F2A260" />
                      <stop offset="100%" stopColor="#c678ae" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbar
                  value={tempC}
                  text={`${tempC}°C`}
                  maxValue={50}
                  className="circular-progressbar"
                  styles={{
                    text:{
                      fontWeight:300,
                      fontFamily:'Montserrat'
                    },
                    path:{
                      strokeWidth:'4px',
                      filter:'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4))'
                    },
                    trail:{
                      strokeWidth:'4px'
                    }
                  }}
                  />

              </div>
          </div>
          <div className="col-3 rounded-4 ms-5 px-0" style={{background:'#3c444c'}}>
            <div className='text-end'>
              <img className='m-3' src="/dots.png" alt="" />
            </div>
            <div className='text-center'>
              <p className='text-white mb-0' style={{fontFamily:'Zilla Slab',fontSize:'28px',fontWeight:400,letterSpacing:'1px'}}>Humidity</p>
            </div>
              <div className='w-50 pb-5 mx-auto'>
                <svg style={{ height: 0 }}>
                  <defs>
                    <linearGradient id="gradient2" gradientTransform="rotate(90)">
                      <stop offset="64%" stopColor="#5c74fb " />
                      <stop offset="100%" stopColor="#925bf4 " />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbar
                  value={percentageHum}
                  text={`${percentageHum}%`}
                  className="circular-progressbar2"
                  styles={{
                    text:{
                      fontWeight:300,
                      fontFamily:'Montserrat'
                    },
                    path:{
                      strokeWidth:'4px',
                      filter:'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4))'
                    },
                    trail:{
                      strokeWidth:'4px'
                    }
                  }}
                />

              </div>
          </div>
          <div className="ms-4 col-3 bg-white rounded-4 border border-2">
            <DatePicker />
          </div>
        </div>
    </div>
  );
}

export default Analytics;
