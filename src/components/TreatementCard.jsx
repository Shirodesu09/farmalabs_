
import React from 'react'
import './TreatementCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faPen,faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
function getColor(priority){
  if(priority==='big'){
    return '#f83635'
  }
  else if(priority=='normal'){
    return '#2ed47a'
  }
  else if(priority=='high'){
    return '#f2994a'
  }
  else if(priority=='small'){
    return '#2d9cdb'
  }
  else{
    return '#fff'
  }
  }

function TreatementCard({data}) {
  const listuser= data.users.map(user => <img className='treat-card-user' src={user} alt="" srcset="" /> )
  return (
    <div className='treat-card border border-1 mb-2 bg-white'>
        <img src="/meds.png" alt="" className='treat-card-img' />
        <span className='treat-card-title'>{data.title} </span>
        <div className='d-flex justify-content-between px-3 my-2'>
            <span className='priority px-3 rounded-2 text-white' style={{background:getColor(data.priority),textTransform:'capitalize'}}>{data.priority}</span>
            <span className='px-3 rounded-2' style={{color:'#90A0B7',background:'#DBE6EB'}}>Reminder</span>
        </div>
        <p className='px-3 mb-2'>Date : <span className='treat-card-info'>{data.dated}</span></p>
        <p className='px-3 mb-2'>End Date :<span className='treat-card-info'>{data.datef}</span></p>
        <p className='px-3 mb-2'>Disease :<span className='treat-card-info'>{data.disease}</span></p>
        <p className='px-3 mb-2 d-inline'>User administered :</p>{listuser}
        <div className='treat-card-icons text-end pe-4 my-2'>
            <FontAwesomeIcon className='px-1' color='#ffb946' icon={faCircle} size="sm" />
            <FontAwesomeIcon className='px-1' icon={faCircle} style={{color:'#2ed47a'}} size="sm" />
            <FontAwesomeIcon className='px-1' icon={faPen} style={{color:'#C2CFE0'}} size="lg" />
            <FontAwesomeIcon className='px-1' icon={faTrash} style={{color:'#C2CFE0'}} size="lg" />
        </div>
        <div className='card-bottom d-flex justify-content-between align-items-center px-3 py-2'>
            <span>21 Mai,Mon,2020</span>
            <FontAwesomeIcon className='icon' icon={faPlus} />
        </div>
    </div>
  )
}

export default TreatementCard