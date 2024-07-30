import React from 'react';
import { useState } from 'react';
import TreatementCard from './TreatementCard';
import './Treatements.css';
import Pagination from '@mui/material/Pagination';
import AddTreatement from './AddTreatement';

function Treatements() {
  const [currentPage, setcurrentPage] = useState(1);
  const [cardPerPage, setcardPerPage] = useState(2);

  const tab = [
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png', '/user.png'], etat: 'next-up', priority: 'big' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png', '/user.png'], etat: 'next-up', priority: 'big' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png'], etat: 'progress', priority: 'high' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png'], etat: 'progress', priority: 'high' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png'], etat: 'completed', priority: 'normal' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png', '/user.png'], etat: 'next-up', priority: 'small' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png'], etat: 'progress', priority: 'high' },
    { dated: '2024/07/10', title: 'Use formic acid against Varroa', datef: '2024/07/14', disease: 'Varroa', users: ['/user.png', '/user.png', '/user.png'], etat: 'completed', priority: 'normal' },
  ];

  const nextup = tab.filter(task => task.etat === 'next-up');
  const progress = tab.filter(task => task.etat === 'progress');
  const completed = tab.filter(task => task.etat === 'completed');

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentNextUpCards = nextup.slice(firstCardIndex, lastCardIndex);
  const currentProgressCards = progress.slice(firstCardIndex, lastCardIndex);
  const currentCompletedCards = completed.slice(firstCardIndex, lastCardIndex);

  const listnextup = currentNextUpCards.map(task => <TreatementCard data={task} />);
  const listprogress = currentProgressCards.map(task => <TreatementCard  data={task} />);
  const listcompleted = currentCompletedCards.map(task => <TreatementCard data={task} />);

  const totalItems = Math.max(nextup.length, progress.length, completed.length);
  const totalPages = Math.ceil(totalItems / cardPerPage);

  return (
    <div className='treat-comp ps-3 pt-3'>
      <img src="/meds.png" className='treat-card-img' alt="" />
      <span style={{ fontSize: '27px', fontWeight: 500, fontFamily: '', lineHeight: '31.64px', letterSpacing: '0.27px' }}>Treatements</span>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-4 custom-height">
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <img src="/nextup.png" style={{width:'50px'}} alt="" />
                  <span style={{color:'#F7BF47',fontFamily:'Roboto',fontSize:'17px',letterSpacing:'0.17px',fontWeight:500}}>Next Up</span>
                </div>
                <span className='text-white px-3 rounded-4' style={{background:'#727d89',fontFamily:'Poppins',fontWeight:500,fontSize:'14px',letterSpacing:'0.14px'}}>2</span>
              </div>
              {listnextup}
            </div>
            <div className="col-4 custom-height">
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <img src="/progress.png" style={{width:'50px'}} alt="" />
                  <span style={{color:'#4380FF',fontFamily:'Roboto',fontSize:'17px',letterSpacing:'0.17px',fontWeight:500}}>In Progress</span>
                </div>
                <span className='text-white px-3 rounded-4' style={{background:'#727d89',fontFamily:'Poppins',fontWeight:500,fontSize:'14px',letterSpacing:'0.14px'}}>2</span>
              </div>
              {listprogress}
            </div>
            <div className="col-4 custom-height">
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <img src="/completed.png" style={{width:'50px'}} alt="" />
                  <span style={{color:'#2ED47A',fontFamily:'Roboto',fontSize:'17px',letterSpacing:'0.17px',fontWeight:500}}>Completed</span>
                </div>
                <span className='text-white px-3 rounded-4' style={{background:'#727d89',fontFamily:'Poppins',fontWeight:500,fontSize:'14px',letterSpacing:'0.14px'}}>2</span>
              </div>
              {listcompleted}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="d-flex justify-content-center mt-2">
                <Pagination count={totalPages} page={currentPage} onChange={(e, value) => setcurrentPage(value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <AddTreatement />
        </div>
      </div>
    </div>
  );
}

export default Treatements;
