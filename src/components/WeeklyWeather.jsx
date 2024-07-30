import React from 'react';
import './WeeklyWeather.css';

function WeeklyWeather() {
  const DayOfWeek = () => {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[today.getDay()];
  };

  const currentDay = DayOfWeek();

  const days = [
    { name: "Sun", img: "/Clear.png", alt: "Sunny", temperature: 29, high: 28, low: 17 },
    { name: "Mon", img: "/Rain.png", alt: "Rain", temperature: 30, high: 28, low: 17 },
    { name: "Tue", img: "/Drizzle.png", alt: "Partly Cloudy", temperature: 15, high: 28, low: 17 },
    { name: "Wed", img: "/Clear.png", alt: "Sunny", temperature: 2, high: 28, low: 17 },
    { name: "Thu", img: "/Clear.png", alt: "Sunny", temperature: 3, high: 28, low: 17 },
    { name: "Fri", img: "/Clear.png", alt: "Sunny", temperature: 4, high: 28, low: 17 },
    { name: "Sat", img: "/Clear.png", alt: "Sunny", temperature: 5, high: 28, low: 17 },
  ];

  return (
    <div className="forecast-container p-0">
      {days.map((day, index) => (
        <div key={index} className={`day ${day.name == currentDay.slice(0, 3) ? 'current-day' : ''}`}>
          <div>{day.name}</div>
          <img src={day.img} alt={day.alt} />
          <div className="temperature">{day.temperature}</div>
          <div className="range">{day.high}°</div>
          <div className='range'>{day.low}°</div>
        </div>
      ))}
    </div>
  );
}

export default WeeklyWeather;