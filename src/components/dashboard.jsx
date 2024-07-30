import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faClipboardCheck,faUsers,faCircle,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import TemperatureChart from './TemperatureChart';
import WeeklyWeather from './WeeklyWeather';
import Dropdown from './Dropdown';
import CircularProgressChart from './CircularProgressChart';

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=36.809149445045925&lon=10.183443349227412&appid=a4c00dce35fea56f048dc9e6224a730a&units=metric`;

function Dashboard() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeather();
    },[]);

    if (!weatherData) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
                <div className='loader'></div>
            </div>
        )
    }
    if (weatherData){
        let json = JSON.stringify(weatherData)
        sessionStorage.setItem('weatherData',json)

       
    }

    const weatherCondition = weatherData.weather[0].main;
    const weatherImagePath = `/${weatherCondition}.png`;
    const Sunrise=new Date(weatherData.sys.sunrise*1000)
    const Sunset=new Date(weatherData.sys.sunset*1000)
    const options = {hour: '2-digit', minute: '2-digit' , hour12:false};
    const formattedSunrise = Sunrise.toLocaleString('en-US', options);
    const formattedSunset = Sunset.toLocaleString('en-US', options);

    return (
        <div className="Dashboard container-fluid">
            <div className="row">
                <div className=" col-md-7 ps-4">
                    <div className="row">
                        <div className="col-lg-6 p-3 pb-0">
                            <img src="/mark.png" className='loc-mark' alt="" />
                            <span className='location'> <b>{weatherData.name}</b>, {weatherData.sys.country}</span>
                            <img src={weatherImagePath} className='weather-icon' alt="??" />
                            <div className="row">
                                <div className="col-lg-5 ps-4">
                                    <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}> Now </p>
                                    <span className='temp'  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{Math.round(weatherData.main.temp)}°C</span>
                                    <p style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>{weatherData.weather[0].description}</p>
                                </div>
                                <div className="col-lg-7">
                                    <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}> Today </p>
                                    <div className='d-flex'>
                                        <div>
                                            <span className='temp'  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{Math.round(weatherData.main.temp_max)}°C</span>
                                            <p style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Max</p>
                                        </div>
                                        <div className='ms-5'>
                                            <span className='temp'  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{Math.round(weatherData.main.temp_min)}°C</span>
                                            <p style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3 pb-0">
                            <div className='pt-5'>
                                <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Wind</p>
                                <p className=''  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{weatherData.wind.speed}m/s</p>
                                <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Humidity</p>
                                <p className='' style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{weatherData.main.humidity}%</p>
                                <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Sunrise</p>
                                <p className='' style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{formattedSunrise}</p>
                            </div>
                        </div>
                        <div className="col-md-3 p-3 pb-0">
                        <div className='pt-5'>
                                <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Cloudiness</p>
                                <p className=''  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{weatherData.clouds.all}%</p>
                                <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Sunset</p>
                                <p className=''  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>{formattedSunset}</p>
                                <p className='m-0' style={{fontSize:'12px',fontWeight:400,fontStyle:'italic'}}>Air quality</p>
                                <p className=''  style={{fontSize:'24px',fontWeight:400,fontStyle:'italic'}}>N/a</p>
                            </div>
                        </div>
                    </div>
                    <div className='row pt-0'>
                        <div className="weekly ps-4">
                            <p className='mb-0' style={{fontSize:'15px',fontWeight:400,fontStyle:'italic',letterSpacing:1,color:'#192A3E'}}>This Week</p>
                            <WeeklyWeather />
                        </div>
                        <div class="row">
                            <div class="col-3 offset-8 text-end h5 pt-2">Tasks</div>
                        </div>
                        <div className="row pt-0 ps-3">
                            <div className="col-6">
                                <h5 className='m-0' style={{color:'#192A3E',fontWeight:500 ,lineHeight:0.8,fontSize:20,paddingLeft:5}}>8 task completed out of 10</h5>
                            </div>
                            <div className="col-3 offset-3">
                                <Dropdown options={['This Week', 'This Month', 'This Year']} />
                            </div>
                        </div>
                        <div className="row pe-5 ps-4">
                            <div className="col">
                                <div className="progress mt-3 mb-4 " style={{height:'4px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width:'10%',background:'#2ed47a'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingLeft:'36px'}}>
                            <div className='bg-white rounded-5 ps-3' style={{boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                                <p className='my-2' style={{fontWeight:400,fontSize:'17px',fontFamily:'ABeeZee'}}>Check for diseases</p>
                                <p style={{fontFamily:'Poppins',fontWeight:400,fontSize:'15px'}}><span style={{color:'#4C5862',opacity:0.7}}>Due date: </span> April 26, 2020</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='user-farma mb-3'>
                                        <img src="/user.png" style={{width:'30px',borderRadius:'50px'}} alt="" />
                                        <span className='ps-3' style={{color:'#707683',opacity:0.9,fontFamily:'Poppins',fontWeight:400}}>User Farma</span>
                                    </div>
                                    <div>
                                        <span className="circle-icon m-1">
                                            <FontAwesomeIcon color='#ffb946' icon={faCircle} size="sm" />
                                        </span>
                                        <span className="circle-icon ms-1">
                                            <FontAwesomeIcon icon={faCircle} style={{color:'#2ed47a'}} size="sm" />
                                        </span>
                                        <span className="circle-icon ms-3">
                                            <FontAwesomeIcon icon={faPen} style={{color:'#C2CFE0'}} size="sm" />
                                        </span>
                                        <span className="circle-icon ms-2">
                                            <FontAwesomeIcon icon={faTrash} style={{color:'#C2CFE0'}} size="sm" />
                                        </span>
                                        <span style={{background:'#F7685B',fontFamily:'Poppins',fontSize:'11px',letterSpacing:'0.22px',lineHeight:'16.5px'}} 
                                        className='rounded-1 py-0 px-2 ms-2 me-4 text-white'>Ended</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                        <div className="pt-2 d-flex justify-content-center" style={{color:"#5c5c5c",width:"95%"}}>
                            <div className="text-center px-xl-5 px-lg-3" >
                                <div style={{ width: '98px', height: '84px', backgroundColor: 'white' }} className='pt-1 border border-1'>
                                    <FontAwesomeIcon icon={faTriangleExclamation} size ="xl" />
                                    <div className=''>
                                        <p className='mb-0'>1</p>
                                        <p>Warnings</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" text-center px-xl-5 px-lg-3">
                                <div style={{ width: '98px', height: '84px', backgroundColor: 'white' }} className='pt-1 border border-1'>
                                    <FontAwesomeIcon icon={faClipboardCheck} size ="xl"/>
                                    <div className=''>
                                        <p className='mb-0'>3</p>
                                        <p>Tasks</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" text-center px-xl-5 px-lg-3">
                                <div style={{ width: '98px', height: '84px', backgroundColor: 'white' }} className='pt-1 border border-1'>
                                    <FontAwesomeIcon icon={faUsers} size ="xl"/>
                                    <div className=''>
                                        <p className='mb-0'>128</p>
                                        <p>Clients</p>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div className="row pt-1 ps-0">
                        <div className="col p-0">
                            <TemperatureChart/>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-8 ps-0 pe-0 bg-white cir-chart">
                            <div className=' text-end'>
                                <Dropdown options={['Monthly', 'Yearly', 'Weekly']} />
                            </div>
                            <CircularProgressChart />
                        </div>
                        <div className="col-4 position-relative d-flex justify-content-center">
                            <img src="/hive.png" style={{height: '265px'}} alt="background" />
                            <div className="filter" style={{ position: 'absolute', top: 0, width: '153px',height:'100%' }}>
                                
                            </div>
                            <div style={{ position: 'absolute', top: '20%' }} className="d-flex justify-content-center">
                                <img src="/marker.png" style={{ width: '80px' }} alt="marker" />
                            </div>
                            <div style={{ position: 'absolute', top: '53%', textAlign: 'center', width: '100%' }}>
                                <p style={{ color: 'white', marginBottom: '0',fontFamily:'Montserrat',fontSize:'14px' }}>Check Your Hives</p>
                            </div>
                            <div style={{ position: 'absolute', bottom: '10%', textAlign: 'center', width: '100%' }}>
                                <button className='btn-gradient px-2' style={{ color: 'white', borderRadius: '20px', padding: '2px 6px', border: 'none' }}>Get Directions</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
