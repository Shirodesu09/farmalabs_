import {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import './EditInspectation.css'

function EditInspectation({trigger,data,setTrigger}) {

    const [year, setYear] = useState(null);
    const [Farmes, setFarmes] = useState(null)
    const [Population, setPopulation] = useState(null)
    const [Date, setDate] = useState(null)
    const [Honey, setHoney] = useState(null)
    const [Egg, setEgg] = useState(null)
    const [VarroaDetected, setVarroaDetected] = useState(null)
    const [FoulbroodDetected, setFoulbroodDetected] = useState(null)
    const [NosemaDetected, setNosemaDetected] = useState(null)
    const [QueenSeen, setQueenSeen] = useState(null)

    useEffect(() => {
        setYear(data.QueenYear);
        setFarmes(data.farmes)
        setPopulation(data.population)
        setDate(data.date)
        setHoney(data.honey)
        setEgg(data.egg)
        setVarroaDetected(data.VarroaDetected)
        setFoulbroodDetected(data.FoulbroodDetected)
        setNosemaDetected(data.NosemaDetected)
        setQueenSeen(data.QueenSeen)
    }, [data,trigger]);

    async function updateData(){
        const d = {
            date: Date,
            frames: Farmes,
            population: Population,
            honey: Honey,
            egg: Egg,
            varroa_detected: VarroaDetected === "Yes",
            foulbrood_detected: FoulbroodDetected === "Yes",
            nosema_detected: NosemaDetected === "Yes",
            queen_seen: QueenSeen === "Yes",
            queen_year: year
        };
        console.log(d)
        
        try {
            const response = await fetch(`http://127.0.0.1:8477/api/update_inspc/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(d),
            });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            setTrigger(false)
  
        }
        catch{
            console.log('err');  
        }

    }

    
    
  return (trigger)?(
    <div className='edit-inspectation-popup' onClick={()=>setTrigger(false)}>
        <div className='inner-edit-popup bg-white p-4 rounded-4' onClick={(e)=>{e.stopPropagation()}}>
            <h4 className='mb-3 text-center'>Edit Inspectation</h4>
            <div className=' input-group d-flex align-items-center mb-3'>
                <input className=' form-control p-2' type="date" value={Date} onChange={(event) => {(e)=>setDate(e.target.value)} } name="" id="" />
            </div>

            <div className="row mb-3">
                <div className="col">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="" value={Farmes} onChange={(event) => {setFarmes(event.target.value)} } />
                        <label for="floatingInputGrid">Farmes</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="" value={Population} onChange={(event) => {setPopulation(event.target.value)} } />
                        <label for="floatingInputGrid">Population</label>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="" value={Honey} onChange={(event) => {setHoney(event.target.value)} }  />
                        <label for="floatingInputGrid">Honey</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="" value={Egg} onChange={(event) => {setEgg(event.target.value)} } />
                        <label for="floatingInputGrid">Egg</label>
                    </div>
                </div>
            </div>
           
            <div className="row mb-3">
                <div className="col">
                    <p>Varroa Detected</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Varroa" checked={VarroaDetected=='Yes'} onChange={() => {setVarroaDetected('Yes')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Varroa" checked={VarroaDetected=='No'} onChange={() => {setVarroaDetected('No')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </div>

                <div className="col">
                    <p>Foulbrood Detected</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Foulbrood" checked={FoulbroodDetected=='Yes'} onChange={() => {setFoulbroodDetected('Yes')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Foulbrood" checked={FoulbroodDetected=='No'} onChange={() => {setFoulbroodDetected('No')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                            No
                        </label>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <p>Nosema Detected</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Nosema" checked={NosemaDetected=='Yes'} onChange={() => {setNosemaDetected('Yes')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Nosema" checked={NosemaDetected=='No'} onChange={() => {setNosemaDetected('No')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </div>

                <div className="col">
                    <p>Queen Seen</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Queen" checked={QueenSeen=='Yes'} onChange={() => {setQueenSeen('Yes')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Queen" checked={QueenSeen=='No'} onChange={() => {setQueenSeen('No')} }/>
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                            No
                        </label>
                    </div>
                </div>
            </div>
            <label for="year">Queen Year</label>
            <input type="number" className='form-control mb-3' value={year} onChange={(event) => {setYear(event.target.value)} } />
            

            <button className='btn bg-primary text-white me-3' onClick={() => updateData()}>Save</button>
            <button className='btn bg-danger text-white' onClick={()=>setTrigger(false)}>Cancel</button>
        </div>
    </div>
  ):""
}

export default EditInspectation