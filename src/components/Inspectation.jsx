import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import EditInspectation from './EditInspectation';
import AddInspectation from './AddInspectation';


function Inspectation() {
  const [Trigger, setTrigger] = useState(false)
  const [triggerAddIns, settriggerAddIns] = useState(false)
  const navigate = useNavigate();
  const [Inspectaion, setInspectaion] = useState(null)
  const [InspectaionsRow, setInspectaionsRow] = useState({})
  function handleDelete(row){
    Swal.fire({
      title: "Do you want to delete the Inspectation?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor:'#ff0e0e'
    }).then((result) => {

      if (result.isConfirmed) {
        try{
          fetch(`http://127.0.0.1:8477/api/del_inspc/${row.id}`, { method: 'DELETE' });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(0);
        }
        catch(error){
          Swal.fire('somthing went wrong','','error')
        }
      }
    });
  }

  const columns = [
        {
          name: 'Action',
          sortable: false,
          cell: row => (
            <div className='ms-1'>
              <FontAwesomeIcon className='px-3' size='lg'  icon={faPen} style={{ cursor: 'pointer' }} onClick={() => {setTrigger(true);setInspectaionsRow(row)}} />
              <FontAwesomeIcon icon={faCircleXmark} size='lg' style={{ cursor: 'pointer' }} onClick={() => handleDelete(row)} />
            </div>
          ),
        },
        {
          name: 'Date',
          selector: row => row.date,
          sortable: true,
        },
        {
          name: 'Frames',
          selector: row => row.farmes,
          sortable: true,
        },
        {
          name: 'Population',
          selector: row => row.population,
          sortable: true,
        },
        {
          name: 'Honey',
          selector: row => row.honey,
          sortable: true,
          cell: row => (
            <div style={{ color:'#8000FF'}}>
              {row.honey}
            </div>
          )
        },
        {
          name: 'Egg',
          selector: row => row.egg,
          sortable: true,
        },
        {
          name: 'Varroa Detected',
          selector: row => row.VarroaDetected,
          sortable: true,
          cell: row => (
            <div style={{ color: row.VarroaDetected.toLowerCase() === 'yes' ? '#0ACF83' : '#FF0742' }}>
              {row.VarroaDetected}
            </div>
          ),
        },
        {
          name: 'Foulbrood Detected',
          selector: row => row.FoulbroodDetected,
          sortable: true,
          cell: row => (
            <div style={{ color: row.FoulbroodDetected.toLowerCase() === 'yes' ? '#0ACF83' : '#FF0742' }}>
              {row.FoulbroodDetected}
            </div>
          ),
        },
        {
          name: 'Nosema Detected',
          selector: row => row.NosemaDetected,
          sortable: true,
          cell: row => (
            <div style={{ color: row.NosemaDetected.toLowerCase() === 'yes' ? '#0ACF83' : '#FF0742' }}>
              {row.NosemaDetected}
            </div>
          ),
        },
        {
          name: 'Queen Seen',
          selector: row => row.QueenSeen,
          sortable: true,
          cell: row => (
            <div style={{ color:'#8000FF'}}>
              {row.QueenSeen}
            </div>
          ),
        },
        {
          name: 'Queen Year',
          selector: row => row.QueenYear,
          sortable: true,
          cell: row => (
            <div style={{ color:'#8000FF'}}>
              {row.QueenYear}
            </div>
          )
        },
    ];
  useEffect(() => {
    const fetchInspectation= async ()=>{
      try{
        const rep = await fetch('http://127.0.0.1:8477/api/inspectation')
        const data = await rep.json();
        setInspectaion(data)
      }catch(error){
        console.log("inspectation not found");
      }
    }
    fetchInspectation()
  }, [])
  

    if (!Inspectaion) {
      return (
      <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
        <div className='loader'></div>
      </div>
    )
  }
  return (
    <>
      <p className='ms-4 mb-1 pt-4' style={{fontSize:'27px',fontFamily:'Roboto',fontWeight:500,letterSpacing:'0.27px',color:'#192A3E'}}>Inspectation</p>
      <div style={{fontFamily:'Roboto',fontSize:'14px',letterSpacing:'1.25px'}} className="d-flex justify-content-between mx-3 mb-3 pt-4">
            <div className='filter-contact bg-white border border-1 px-3 d-flex align-items-center'>
                <img src="/filter.png" className='m-2' style={{width:'14px'}} alt="" />
                <span className='pe-2'>FILTER</span>
            </div>
            <div className='add-inspectation text-white d-flex align-items-center' onClick={() => {settriggerAddIns(true)} } style={{background:'#2ed47a',cursor:'pointer'}}>
                <img src="/add.png" className='m-2' style={{width:'14px'}} alt="" />
                <span className='pe-2' style={{textTransform:'uppercase'}} >inspectation</span>
            </div>
        </div>
        <div style={{fontFamily:'Roboto',fontWeight:400,fontSize:'14px'}} className='scrollable-table-container mx-3'>
            <DataTable
                title=" "
                columns={columns}
                data={Inspectaion}
                selectableRows
                pagination
                paginationPerPage={10}
            />
        </div>
      <EditInspectation trigger={Trigger} data={InspectaionsRow} setTrigger={setTrigger} />
      <AddInspectation triggerAddIns={triggerAddIns} settriggerAddIns={settriggerAddIns} />
    </>
  )
}

export default Inspectation