import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import logo from './logo.svg';
import Alert from './components/Alert';
// import './App.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtlies - Dark Mode";
    }
    else if(mode === '#B3D4FA'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtlies - Dark Mode";
    }
    else if(mode==='pink') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtlies - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtlies - Light Mode";
    }
  }

  const GirlyMode = ()=>{
    setMode('pink');
    document.body.style.backgroundColor = 'pink';
  }

  const greenyMode = ()=>{
    setMode('#B3D4FA');
    document.body.style.backgroundColor = '#B3D4FA';
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Custom" mode={mode} toggleMode={toggleMode} GirlyMode={GirlyMode} greenyMode={greenyMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About/>}/> */}
          {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>}/> */} 
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>  
          {/* </Route> */}
        {/* </Routes>  */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
