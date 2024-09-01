import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faPen,faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import './TaskCard.css'
import EditTask from './EditTask.jsx';

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
function TaskCard({data,onEdit}) {
    const users = data.users.map(user => <img src={user} className='rounded-5 mx-1' style={{width:'25px'}} alt="" /> )
    const navigate = useNavigate();
    function delTask(row){
      Swal.fire({
        title: "Do you want to delete the task?",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor:'#ff0e0e'
      }).then((result) => {
    
        if (result.isConfirmed) {
          try{
            fetch(`http://127.0.0.1:8477/api/del_task/${row.id}`, { method: 'DELETE' });
            navigate(0);
          }
          catch(error){
            Swal.fire('somthing went wrong','','error')
          }
        }
      });
    }
  return (
    <div className='task-card mx-auto border border-1  mt-2'>
        <div className='d-flex justify-content-between align-items-center pb-2 pt-1 px-3'>
            <span className='rounded-3 px-4 text-white' 
            style={{background:getColor(data.priority)
                ,textTransform:'capitalize',
                fontFamily:'Poppins',
                fontWeight:500,fontSize:'13px',
                letterSpacing:'0.22px'}}>
                    {data.priority}</span>
            <span style={{color:'#90A0B7',fontSize:'14px'}}>Reminder</span>
        </div>
        <div>
            <div className="form-check mt-0 ms-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label"style={{fontSize:'11px',color:'#323C47',letterSpacing:'0.5px'}}>{data.task}</label>
            </div>
        </div>
        <div className='d-flex justify-content-between mt-0 pb-2'>
            <div className='px-2'>
                {users}
            </div>
            <div className='px-2'>
                <FontAwesomeIcon className='px-1' color='#ffb946' icon={faCircle} size="xs" />
                <FontAwesomeIcon className='px-1' icon={faCircle} style={{color:'#2ed47a'}} size="xs" />
                <FontAwesomeIcon className='px-1' icon={faPen} style={{color:'#C2CFE0',cursor:'pointer'}} size="sm" onClick={() => onEdit(data)} />
                <FontAwesomeIcon className='px-1' icon={faTrash} onClick={()=>delTask(data)} style={{color:'#C2CFE0',cursor:'pointer'}} size="sm" />
            </div>
        </div>
        <div className='task-card-bottom d-flex justify-content-between align-items-center px-3 py-1'>
            <span>21 Mai,Mon,2020</span>
            <FontAwesomeIcon className='icon' icon={faPlus} />
        </div>

    </div>
  )
}

export default TaskCard