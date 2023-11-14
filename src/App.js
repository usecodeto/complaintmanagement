
import './App.css';
import React from 'react';
import AboutCMS from './components/aboutcms/aboutcms';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Complaints from './components/complaints/complaints';
import { 
  BrowserRouter as Router,  
  Route, 
  Routes, 
} from "react-router-dom"; 
import Modal from './components/complaintmodal/complaintmodal';



function App() {
  
  
  return (
    <>
    
   <div>

      <Router>
        <Routes>
    <Route path='/filecomplaint'  element={
      <div className='mainbox' >
      <Navigation/>
      <Modal/>
      <Footer/>
    </div>
    }/>
    <Route path='/'  element={<div className='mainbox' >
      <Navigation/>
      <AboutCMS/>
      <Modal/>
      <Complaints/>
      <Footer/>
    </div>}/>
 
    </Routes>
  </Router>

   </div>
   </>
  //  <Head/> 
  //  <Footer/> 
  );
}

export default App;
