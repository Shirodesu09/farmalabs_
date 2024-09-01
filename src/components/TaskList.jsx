import { useEffect, useState } from 'react';
import './TaskList.css';
import Dropdown from './Dropdown';
import TaskCard from './TaskCard';
import EditTask from './EditTask';

function TaskList() {
  const [trigger, setTrigger] = useState(false);
  const [Tasks, setTasks] = useState(null);
  const [TaskData, setTaskData] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const rep = await fetch("http://127.0.0.1:8477/api/tasks");
        const data = await rep.json();
        setTasks(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTasks();
  }, []);

  if (!Tasks) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
        <div className='loader'></div>
      </div>
    );
  }

  const toDo = Tasks.filter(task => task.category === 'to-do');
  const doing = Tasks.filter(task => task.category === 'doing');
  const done = Tasks.filter(task => task.category === 'done');

  const handleEditClick = (task) => {
    setTaskData(task); // Set the selected task data
    setTrigger(true);  // Trigger the EditTask component
  };

  const toDoList = toDo.map(task => <TaskCard data={task} onEdit={handleEditClick} />);
  const doingList = doing.map(task => <TaskCard data={task} onEdit={handleEditClick} />);
  const doneList = done.map(task => <TaskCard  data={task} onEdit={handleEditClick} />);

  return (
    <div>
      <div className="row px-5">
        <div className="task-row col mt-2 rounded-2 bg-white px-4">
          <div className='d-flex justify-content-between mt-3'>
            <span className='task-competed'>1 task completed out of 6</span>
            <Dropdown options={['This Week', 'This Month', 'This Year']} />
          </div>

          <div className="progress mt-3 mb-4 " style={{ height: '4px' }}>
            <div className="progress-bar" role="progressbar" style={{ width: '10%', background: '#2ed47a' }}></div>
          </div>
        </div>
      </div>
      <div className="row px-5">
        <div className="col bg-white ms-2 mt-2 rounded-5 pt-2 pb-4 task-col me-2" style={{ maxHeight: '75vh', overflow: 'auto' }}>
          <span className='task-title px-3'>To-Do</span>
          <span className='px-3 text-white rounded-5' style={{ background: '#757f8b' }}>3</span>
          <p className='task-title ps-3 pt-1 mb-0' style={{ color: '#4380FF', fontSize: '12px' }}>2 Mai 2020 - 24 Jui 2020</p>
          {toDoList}
        </div>
        <div className="col bg-white ms-2 mt-2 rounded-5 pt-2 pb-4 task-col me-2" style={{ maxHeight: '75vh', overflow: 'auto' }}>
          <span className='task-title px-3'>Doing</span>
          <span className='px-3 text-white rounded-5' style={{ background: '#757f8b' }}>3</span>
          <p className='task-title ps-3 pt-1 mb-0' style={{ color: '#4380FF', fontSize: '12px' }}>2 Mai 2020 - 24 Jui 2020</p>
          {doingList}
        </div>
        <div className="col bg-white ms-2 mt-2 rounded-5 pt-2 pb-4 task-col" style={{ maxHeight: '75vh', overflow: 'auto' }}>
          <span className='task-title px-3'>Done</span>
          <span className='px-3 text-white rounded-5' style={{ background: '#757f8b' }}>3</span>
          <p className='task-title ps-3 pt-1 mb-0' style={{ color: '#4380FF', fontSize: '12px' }}>2 Mai 2020 - 24 Jui 2020</p>
          {doneList}
        </div>
      </div>
      {trigger && <EditTask settrigger={setTrigger} data={TaskData} />}
    </div>
  );
}

export default TaskList;
