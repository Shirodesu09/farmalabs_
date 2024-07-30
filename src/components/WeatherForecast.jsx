import React from 'react'
import './WeatherForecast.css'
function getHeight(hiveTemp){
    return String(100-hiveTemp)+'%'
}
function getBorderRad(hiveTemp){
    if (100-hiveTemp<91){
        return '20px 20px 0 0'
    }
    else{
        return '20px'
    }
}
function WeatherForecast() {
    const weatherDataString = sessionStorage.getItem('weatherData')
    const weatherData =JSON.parse(weatherDataString)
    const weatherCondition = weatherData.weather[0].main;
    const weatherImagePath = `/${weatherCondition}.png`;
    const Sunrise=new Date(weatherData.sys.sunrise*1000)
    const Sunset=new Date(weatherData.sys.sunset*1000)
    const options = {hour: '2-digit', minute: '2-digit'};
    const formattedSunrise = Sunrise.toLocaleString('en-US', options);
    const formattedSunset = Sunset.toLocaleString('en-US', options);
    const hiveTemp=20
    const hiveHum=50
    const outDoorWind=20

    const Weeklyweather = [
        { day: 'Today', minTemp: 5.8, maxTemp: 14.44, humidity: 60, windSpeed: 26, icon: '/Rain.png' },
        { day: 'Tomorrow', minTemp: 4.31, maxTemp: 14, humidity: 59, windSpeed: 26, icon: '/Rain.png' },
        { day: 'Sun. 3', minTemp: 6.62, maxTemp: 16.55, humidity: 50, windSpeed: 8, icon: '/Clear.png' },
        { day: 'Mon. 4', minTemp: 11.72, maxTemp: 19.47, humidity: 69, windSpeed: 7, icon: '/Rain.png' },
        { day: 'Tue. 5', minTemp: 10.73, maxTemp: 20.54, humidity: 74, windSpeed: 16, icon: '/Clear.png' },
        { day: 'Wed. 6', minTemp: 9.18, maxTemp: 16.3, humidity: 80, windSpeed: 9, icon: '/Rain.png' },
        { day: 'Thu. 7', minTemp: 10.63, maxTemp: 20.11, humidity: 65, windSpeed: 10, icon: '/Cloudy.png' },
      ];
     const weatherList = Weeklyweather.map(day => <div className="row bg-white border border-1 d-flex align-items-center ps-5">
        <div className="col">
            <img src={day.icon} className='mx-1 my-2' style={{width:'25px'}}/>
            <span>{day.day}</span>
        </div>
        <div className="col ps-4">
            <span>{day.minTemp}ºC</span>
        </div>
        <div className="col">
            <span>{day.maxTemp}ºC</span>
        </div>
        <div className="col">
            <span>{day.humidity}%</span>
        </div>
        <div className="col">
            <span>{day.windSpeed} km/h</span>
        </div>
     </div> )
    return(
        <div className='row px-4 pt-2'>
            <div className="col-8">
                <div className="row bg-white rounded-4 border border-2 mb-2">
                    <div className="col-8">
                        <div className='p-2' style={{fontFamily:'ABeeZee',fontSize:'16px'}}>
                            <img src="/mark.png" className='loc-mark' alt="" />
                            <span className='location'> <b>{weatherData.name}</b>, {weatherData.sys.country}</span>
                        </div>
                        <img src={weatherImagePath} className='my-2' style={{width:'100px'}} srcset="" />
                        <div className='row'>
                            <div className="col-4 mb-1">
                                <small className=''>Now</small>
                                <p className='h4 my-0'>{Math.round(weatherData.main.temp)} °C</p>
                                <small>{weatherData.weather[0].description}</small>
                            </div>
                            <div className="col-2 my-auto">
                                <small className='my-0'>Max</small>
                                <p className='h5 my-0'>{Math.round(weatherData.main.temp_max)} °C</p>
                            </div>
                            <div className="col-4 my-auto">
                                <small className='my-0'>Min</small>
                                <p className='h5 my-0'>{Math.round(weatherData.main.temp_min)} °C</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 gradient-weather rounded-4 ">
                        <div className='text-end'>
                            <img src="/dots.png" className='text' style={{width:'22px'}} alt="" />
                        </div>
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src="/rain2.png" style={{ width: '85px' }} alt="" />
                            <p className='text-white h3 my-2' style={{fontFamily:'Montserrat',fontWeight:'300px'}}>{Math.floor(weatherData.main.feels_like)}°C</p>
                            <p className='h3 text-white' style={{fontFamily:'Montserrat',fontWeight:'300px'}}>Outdoor Temperture</p>
                        </div>
                        
                    </div>
                </div>
                <div className="row ps-5">
                    <div style={{fontFamily:'ABeeZee',fontWeight:400}} className="col-5 ms-5 sunrise-bg text-white rounded-4 p-3">
                        <small className='ps-2'>Sunrise</small>
                        <h3 className='ps-2 mt-2'>{formattedSunrise}</h3>
                    </div>
                    <div style={{fontFamily:'ABeeZee',fontWeight:400}} className="col-5 mx-4 sunset-bg text-white rounded-4 p-3">
                        <small className='ps-2'>Sunset</small>
                        <h3 className='ps-2 mt-2'>{formattedSunset}</h3>
                    </div>
                </div>
                <div style={{fontFamily:'ABeeZee',fontWeight:400,fontSize:'15px',letterSpacing:'0.14px'}}>
                <div className="row bg-white border border-1 d-flex align-items-center mt-2 ps-4">
                    <div className="col ps-5 pe-0">Day</div>
                    <div className="col">
                        <img src="/temp3.png" className='m-2' style={{width:'20px'}} alt="" srcset="" />
                        <span style={{color:'#EB5757'}}>Max</span>
                    </div>
                    <div className="col">
                        <img src="/temp3.png"className='m-2' style={{width:'20px'}} alt="" srcset="" />
                        <span style={{color:'#EB5757'}}>Min</span>
                    </div>
                    <div className="col">
                        <img src="/raindrop3.png"className='m-2' style={{width:'20px'}} alt="" srcset="" />
                        <span style={{color:'#2F80ED'}}>Humidty</span>
                    </div>
                    <div className="col">
                        <img src="/wave2.png"className='m-2' style={{width:'20px'}} alt="" srcset="" />
                        <span style={{color:'#2ED47A'}}>Wind</span>
                    </div>
                </div>
                {weatherList}
                </div>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
                <div className='temp-card border border-2 w-75 bg-white rounded-5 d-flex justify-content-between p-2 mb-3' style={{height:'204px'}}>
                    <div className='p-2'>
                        <span>Hive’s Temperature</span>
                        <p className='h3'>{hiveTemp}°C</p>
                    </div>
                    <div className='position-relative' style={{height:'176px',width:'76px'}}>
                        <div className='custom-progress d-flex justify-content-center align-items-center' style={{height:'100%'}}>
                            <img src="/temp.png" className='mt-5 pt-5' style={{zIndex: 1,width:'25px' }} alt="" />
                        </div>
                        <div className='empty-progress' style={{height:getHeight(hiveTemp),borderRadius:getBorderRad(hiveTemp)}}></div>
                    </div>
                </div>
                <div className='temp-card border border-2 w-75 bg-white rounded-5 d-flex justify-content-between p-2 mb-3' style={{height:'204px'}}>
                    <div className='p-2'>
                        <span>Hive’s Humidity</span>
                        <p className='h3'>{hiveHum}%</p>
                    </div>
                    <div className='position-relative' style={{height:'176px'}}>
                        <div className='custom-progress d-flex justify-content-center align-items-center' style={{background:'#4380FF',height:'100%'}}>
                            <img src="/raindrop2.png" className='mt-5 pt-5' style={{zIndex: 1,width:'25px' }} alt="" />
                        </div>
                        <div className='empty-progress' style={{background:'#d9ebee',height:getHeight(hiveHum),borderRadius:getBorderRad(hiveHum)}}></div>
                    </div>
                </div>
                <div className='temp-card border border-2 w-75 bg-white rounded-5 d-flex justify-content-between p-2 ' style={{height:'204px'}}>
                    <div className='p-2'>
                        <span>Outdoor Wind</span>
                        <p className='h3'>{outDoorWind}%</p>
                    </div>
                    <div className='position-relative' style={{height:'176px'}}>
                        <div className='custom-progress d-flex justify-content-center align-items-center' style={{background:'#2ed47a',height:'100%'}}>
                            <img src="/wave.png" className='mt-5 pt-5' style={{zIndex: 1,width:'25px' }} alt="" />
                        </div>
                        <div className='empty-progress' style={{background:'#d0d3e5',height:getHeight(outDoorWind),borderRadius:getBorderRad(outDoorWind)}}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherForecast