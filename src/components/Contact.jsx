import { useEffect,useState } from 'react'
import DataTable from 'react-data-table-component';
import './Contact.css'
import Swal from 'sweetalert2'

function Contact() {
  const [userData, setUserData] = useState(null);

      useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8477/api/contact/users");
                const data = await res.json();
                setUserData(data);
                console.log("data loaded");
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchUsers();
    },[]);
    const columns = [
      {
        name: 'User',
        selector: row => row.name,
        sortable: true,
        cell: row => <div><img src="/user.png" className='rounded-5' style={{width:'30px'}} alt="icon" /> {row.name}</div>,
      },
      {
        name: 'User ID',
        selector: row => row.id,
        sortable: true,
      },
      {
        name: 'Phone Number',
        selector: row => row.tel,
        sortable: true,
      },
      {
        name: 'Email Address',
        selector: row => row.mail,
        sortable: true,
      },
      {
        name: 'Account Created',
        selector: row => row.date,
        sortable: true,
      },
    ];

    if (!userData) {
        return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
          <div className='loader'></div>
        </div>
      )
    }
  return (
    <>
        <div style={{fontFamily:'Roboto',fontSize:'14px',letterSpacing:'1.25px'}} className="d-flex justify-content-between mx-3 mb-3 pt-4">
            <div className='filter-contact bg-white border border-1 px-3 d-flex align-items-center'>
                <img src="/filter.png" className='m-2' style={{width:'14px'}} alt="" />
                <span className='pe-2'>FILTER</span>
            </div>
            <div className='add-user-contact text-white d-flex align-items-center' style={{background:'#2ed47a'}}>
                <img src="/add.png" className='m-2' style={{width:'14px'}} alt="" />
                <span className='pe-2'>ADD USER</span>
            </div>
        </div>
        <div className='scrollable-table-container mx-3'>
            <DataTable
            title=" "
            columns={columns}
            data={userData}
            selectableRows
            pagination
            paginationPerPage={10}
            />
        </div>
    </>
  )
}

export default Contact