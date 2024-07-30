import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './AddTreatement.css'

function AddTreatement() {
    const titleRef = useRef(null);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const diseaseRef = useRef(null);
    const userAdminRef = useRef(null);
    const priorityRef = useRef(null);

    const insertTreatement = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const start_date = startDateRef.current.value;
        const end_date = endDateRef.current.value;
        const disease = diseaseRef.current.value;
        const user_admin = userAdminRef.current.value;
        const priority = priorityRef.current.value;

        const treatement = { title, start_date, end_date, disease, user_admin, priority };
        
        fetch('http://127.0.0.1:8477/api/add_treatement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(treatement)
        });
    }

    return (
        <div className='mt-3'>
            <div className='text-end pe-3'>
                <span className='add-new text-white px-3 py-2 rounded-1 me-2' style={{ background: '#2ed47a' }}>
                    <FontAwesomeIcon className='icon px-2' icon={faPlus} />
                    <span className='px-2'>ADD NEW</span>
                </span>
            </div>
            <div className='create-treatement mt-4 pe-4'>
                <form onSubmit={insertTreatement}>
                    <div className='form-floating mt-3 pb-3'>
                        <input type="text" className="form-control date-input" id="title" ref={titleRef} required />
                        <label htmlFor="title" style={{ color: '#1554F6', background: '', paddingLeft: '0px', paddingRight: '0px' }} className=''>
                            <span className='px-2 py-1' style={{ background: '#e9ebec', borderRadius: '10px' }}>Task</span>
                        </label>
                    </div>
                    <div className='form-floating'>
                        <input type="date" className="form-control date-input" id="startdate" ref={startDateRef} required />
                        <label htmlFor="startdate" style={{ color: '#1554F6', background: '', paddingLeft: '0px', paddingRight: '0px' }} className=''>
                            <span className='px-2 py-1' style={{ background: '#e9ebec', borderRadius: '10px' }}>Start Date</span>
                        </label>
                    </div>
                    <div className='form-floating mt-3'>
                        <input type="date" className="form-control date-input" id="enddate" ref={endDateRef} required />
                        <label htmlFor="enddate" style={{ color: '#1554F6', background: '', paddingLeft: '0px', paddingRight: '0px' }} className=''>
                            <span className='px-2 py-1' style={{ background: '#e9ebec', borderRadius: '10px' }}>End Date</span>
                        </label>
                    </div>
                    <div className='form-floating mt-3'>
                        <input type="text" className="form-control date-input" id="disease" ref={diseaseRef} required />
                        <label htmlFor="disease" style={{ color: '#1554F6', background: '', paddingLeft: '0px', paddingRight: '0px' }} className=''>
                            <span className='px-2 py-1' style={{ background: '#e9ebec', borderRadius: '10px' }}>Disease</span>
                        </label>
                    </div>
                    <div className='form-floating mt-3 pb-3'>
                        <input type="text" className="form-control date-input" id="useradmin" ref={userAdminRef} required />
                        <label htmlFor="useradmin" style={{ color: '#1554F6', background: '', paddingLeft: '0px', paddingRight: '0px' }} className=''>
                            <span className='px-2 py-1' style={{ background: '#e9ebec', borderRadius: '10px' }}>User Administered</span>
                        </label>
                    </div>
                    <div className='form-floating mt-3 pb-3'>
                        <input type="text" className="form-control date-input" id="priority" ref={priorityRef} required />
                        <label htmlFor="priority" style={{ color: '#1554F6', background: '', paddingLeft: '0px', paddingRight: '0px' }} className=''>
                            <span className='px-2 py-1' style={{ background: '#e9ebec', borderRadius: '10px' }}>Priority</span>
                        </label>
                    </div>
                    <button type='submit' id='create' className='add-treat-btn py-2 px-3 border border-0'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddTreatement;
