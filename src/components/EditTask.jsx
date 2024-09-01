import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import './EditTask.css';
import { useNavigate } from 'react-router-dom';

function EditTask({ data, settrigger }) {
    const navigate = useNavigate()
    const [id, setid] = useState(0);
    const [Task, setTask] = useState("");
    const [priority, setpriority] = useState("big");

    useEffect(() => {
        setid(data.id);
        setTask(data.task)
    }, [data]);
    function updateTask(){
        const d = {
            task: Task,
            priority
        }
        try {
            axios.put(`http://127.0.0.1:8477/api/update_task/${id}`, d)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1000
              })
              settrigger(false)

        }catch{
            console.log("Error")
        }
    }

    return (
        <div className='edit-task-popup' onClick={() => settrigger(false)}>
            <div className='inner-edit-task-popup bg-white p-4 rounded-4' onClick={(e) => e.stopPropagation()}>
                <h4 className='text-center'>Edit Task</h4>
                <div className="row g-2 mb-3">
                    <div className="col-md">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputGrid"
                                placeholder="Task ID"
                                onChange={(e) => setTask(e.target.value)}
                                value={Task}
                            />
                            <label htmlFor="floatingInputGrid">Task</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e)=>{setpriority(e.target.value)}}>
                                <option value="Big" selected={data.priority === 'big'}>Big</option>
                                <option value="High" selected={data.priority === 'high'}>High</option>
                                <option value="Narmal" selected={data.priority === 'normal'}>Normal</option>
                                <option value="Small" selected={data.priority === 'small'}>Small</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Priority</label>
                        </div>
                    </div>
                </div>
                <button type='button' className='btn bg-primary text-light mx-2' onClick={()=>updateTask()}>Save</button>
                <button type="button" className='btn bg-danger text-light' onClick={() => settrigger(false)}>Cancel</button>
            </div>
        </div>
    );
}

export default EditTask;
