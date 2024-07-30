import React, { useState, useEffect } from 'react';
import './Sidebar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faCog, faGauge, faComment, faEnvelope, faClipboard, faBarsProgress, faChartLine, faCalendarDays, faUser, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './dashboard';
import Location from './Location';
import Treatements from './Treatements';
import TaskList from './TaskList';
import { BrowserRouter as Router, Routes, Route, NavLink,Navigate   } from 'react-router-dom';
import Contact from './Contact'
import Analytics from './Analytics'
import Inspectation from './Inspectation';
import WeatherForecast from './WeatherForecast';

const Sidebar = () => {
  const [expander, setExpander] = useState(false);
  const [collapsed, setCollapsed] = useState({});

  useEffect(() => {
    const toggle = document.getElementById('nav-toggle');
    const body = document.getElementById('body-pd');

    const handleToggleClick = () => {
      setExpander(!expander);
      body.classList.toggle('body-pd');
    };

    if (toggle && body) {
      toggle.addEventListener('click', handleToggleClick);
    }

    const linkCollapse = document.getElementsByClassName('collapse__link');
    Array.from(linkCollapse).forEach((link, i) => {
      link.addEventListener('click', () => handleCollapseClick(i));
    });

    return () => {
      if (toggle) {
        toggle.removeEventListener('click', handleToggleClick);
      }
      Array.from(linkCollapse).forEach((link, i) => {
        link.removeEventListener('click', () => handleCollapseClick(i));
      });
    };
  }, [expander]);

  const handleCollapseClick = (index) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Router>
      <div className='body-size'>
        <div id="body-pd" className={expander ? 'body-pd' : ''}>
          <div className={`l-navbar ${expander ? 'expander' : ''}`} id="navbar">
            <nav className="nav">
              <div>
                <div className="nav__list">
                  <img src="/logo.png" className='' style={{ height: '40px' }} alt="" />
                  <div className="sidebar-user py-4">
                    <div className="user-container px-1">
                      <img src="/user.png" style={{ width: '44px', borderRadius: '50px' }} alt="" />
                      <div className="user-info">
                        <span className='ps-2 ' style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px' }}>User Farmalabs</span>
                        <span className='ms-3' style={{ fontSize: '11px' }}>user_farma@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/dashboard" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faGauge} className="nav__icon pe-1" />
                    <span className="nav__name">Dashboard</span>
                  </NavLink>
                  <NavLink to="/Location" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faHome} className="nav__icon" />
                    <span className="nav__name">Apiaries</span>
                  </NavLink>
                  <NavLink to="#" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faBarsProgress} className="nav__icon pe-1" />
                    <span className="nav__name">HiveYards</span>
                  </NavLink>
                  <NavLink to="/Treatements" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faHome} className="nav__icon" />
                    <span className="nav__name">Treatments</span>
                  </NavLink>
                  <NavLink to="/WeatherForecast" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faCalendarDays} className="nav__icon pe-1" />
                    <span className="nav__name">Weather Forecast</span>
                  </NavLink>
                  <NavLink to="/Analytics" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faChartLine} className="nav__icon" />
                    <span className="nav__name">Analytics</span>
                  </NavLink>
                  <NavLink to="/TaskList" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faBarsProgress} className="nav__icon" />
                    <span className="nav__name">Tasks</span>
                  </NavLink>
                  <NavLink to="/Inspectation" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faClipboard} className="nav__icon px-1" />
                    <span className="nav__name">Inspectations</span>
                  </NavLink>
                  <NavLink to="/Contact" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faEnvelope} className="nav__icon" />
                    <span className="nav__name">Contact</span>
                  </NavLink>
                  <a href="#" className="nav__link">
                    <FontAwesomeIcon style={{ color: "#fff" }} icon={faComment} className="nav__icon" />
                    <span className="nav__name">Chat</span>
                  </a>
                </div>
              </div>
              <hr className='text-white' style={{ border: 'none', borderTop: '4px solid white' }} />
              <a href="#" className="nav__link">
                <FontAwesomeIcon icon={faCog} style={{ color: "#fff" }} className="nav__icon" />
                <span className="nav__name">Settings</span>
              </a>
              <div className="nav__brand">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} className="nav__toggle me-2" id="nav-toggle" />
                <span style={{ color: '#90A0B7', fontFamily: 'Poppins', fontSize: '12px', letterSpacing: '1%' }} className=''>Toggle sidebar</span>
              </div>
            </nav>
          </div>
          <div className="content">
            <div className='nav-bar d-flex justify-content-between' style={{ height: '5.5vh' }}>
              <div className='search-bar mt-2 pt-1 ms-4'>
                <FontAwesomeIcon style={{ color: '#aaa' }} size='sm' icon={faMagnifyingGlass} />
                <input type="text" className=' bg-transparent' placeholder='Global Search...' />
              </div>
              <div className='navbar-icons'>
                <FontAwesomeIcon className='mx-2 my-2 pt-1' icon={faEnvelope} size='lg' style={{ color: '#C2CFE0' }} />
                <FontAwesomeIcon className='mx-3 my-2 pt-1' icon={faBell} size='lg' style={{ color: '#C2CFE0' }} />
                <FontAwesomeIcon className='ms-2 me-4 pe-3 my-2 pt-1' icon={faUser} size='lg' style={{ color: '#C2CFE0' }} />
              </div>
            </div>
            <div className='Nav-comps' style={{ height: '94.5vh',background:'#f7f9fa' }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Location" element={<Location />} />
                <Route path='/Treatements' element={<Treatements />} />
                <Route path='/TaskList' element={<TaskList />} />
                <Route path='/WeatherForecast' element={<WeatherForecast />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Analytics' element={<Analytics />} />
                <Route path='/Inspectation' element={<Inspectation />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
