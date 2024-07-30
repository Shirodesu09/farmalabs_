import React from 'react'
import './CustomPopup.css'
import cardImg from '../assets/img1.png'
import userImg from '../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function CustomPopup(props) {

  return (props.trigger) ? (
    <div className='card' onClick={props.onClick}>
      <img src={cardImg} className="card-img-top" alt="..."></img>
      <div className='position-absolute pe-5 popuptop-left d-flex align-items-center justify-content-center' style={{width: '65px', height: '40px', top: '30px', left: '0', borderRadius: '0 25px 25px 0'}}>
        <div className='d-flex ms-5'>
          <img style={{width: '20px'}} src="/beehive.png" />
          <span className='text-white'>25</span>
        </div>
      </div>

      <div className='user'>
        <div className="user-img-border">
          <img src={userImg} className='user-img'></img>
        </div>
        <h5 className='name'>User Farma</h5>
      </div>
        <div className='card-body'>
          <p className='popup-text'>Longtitude :{props.currentMarker.geocode[1]}</p>
          <p className='popup-text'>Latitude :{props.currentMarker.geocode[0]}</p>
          <p className='popup-text'>Beehive Type :</p>
          <p className='popup-text'>Apiary Type : Base</p>
          <div className='weather d-flex justify-content-center'>
              <div className='weather-element'><img src='/temp2.png' className='icons p-' style={{background:'#ea360f',width:'30px'}} /><span> 11.72°C</span></div>
              <div className='weather-element'><img src='/wave.png' className='icons py-2' style={{background:'#2ed47a'}} /><span> 7 km/h</span></div>
              <div className='weather-element'><img src='/raindrop.png' className='icons py-2' style={{background:'#4380ff'}} /><span> 69 %</span></div>
          </div>
          <div className="d-flex justify-content-center">
            <div className='pop-btn btn' onClick={props.handleCheckNext}>
              CHECK NEXT
              <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
            </div>
        </div>
      </div>
    </div>
  ) : "";
}

export default CustomPopup;
