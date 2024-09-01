import React from 'react'
import './AddInspectation.css'

function AddInspectation({triggerAddIns,settriggerAddIns}) {
    
    return (triggerAddIns) ? (
        <div className='add-inspectation-popup' onClick={() => settriggerAddIns(false)}>
            <div className='inner-add-popup bg-white p-4 rounded-4' onClick={(e) => { e.stopPropagation() }}>
                <h4 className='mb-3 text-center'>Add Inspectation</h4>
                <div className='input-group d-flex align-items-center mb-3'>
                    <input className='form-control p-2' type="date" />
                </div>
    
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="" />
                            <label htmlFor="floatingInputGrid">Farmes</label>
                        </div>
                    </div>
    
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="" />
                            <label htmlFor="floatingInputGrid">Population</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="" />
                            <label htmlFor="floatingInputGrid">Honey</label>
                        </div>
                    </div>
    
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="" />
                            <label htmlFor="floatingInputGrid">Egg</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mb-3">
                    <div className="col">
                        <p>Varroa Detected</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Varroa" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Varroa" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
    
                    <div className="col">
                        <p>Foulbrood Detected</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Foulbrood" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Foulbrood" />
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
                            <input className="form-check-input" type="radio" name="Nosema" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Nosema" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
    
                    <div className="col">
                        <p>Queen Seen</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Queen" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Queen" />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <label htmlFor="year">Queen Year</label>
                <input type="number" className='form-control mb-3' />
    
                <button className='btn bg-primary text-white me-3'>Add</button>
                <button className='btn bg-danger text-white' onClick={() => settriggerAddIns(false)}>Cancel</button>
            </div>
        </div>
    ) : ""
    }

export default AddInspectation