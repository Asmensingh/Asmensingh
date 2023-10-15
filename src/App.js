import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light') // wether dark mode is enable or not 
  const [alert, setAlert] = useState(null)
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      showAlert("Dark mode has been enabled","success")
      document.body.style.backgroundColor = '#042743'
      // document.title ="TextUtils - Dark mode"
      // reflect the text change in header
      // setInterval(() => { 
      //   document.title = "Textutils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now"
      // }, 1500);
    }else{
      setMode('light')
      showAlert("Light mode has been enabled","success")
      document.body.style.backgroundColor = 'white'
      // document.title ="TextUtils - Light mode"
    }
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
   <>
   <Router>
    <Navbar title="Asmen Singh" about = "About us" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert={alert} />
    <div className='container my-3'>
      <Routes>
        <Route exact path='/about' element={<About mode={mode} />}></Route>
        <Route exact path='/' element= {<TextForm showAlert ={showAlert} heading = "Try Asmen - Word Counter, Character Counter, Remove extra space" mode={mode} />}></Route>
      </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
