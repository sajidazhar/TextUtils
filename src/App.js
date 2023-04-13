//import logo from './logo.svg'
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type :  type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500)
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-sucess')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-' +cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title = 'TextUtils - Dark Mode'
        }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title = 'TextUtils - Light Mode'

        }
  }
  return(
    <>
    
    <Alert alert={alert}/>

    <Router>
            <Routes>
            

              <Route exact path="/" element={<>           
                 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
              <TextForm showAlert={showAlert} heading ="TextUtils-Word Counter,Character Counter,
              Remove extra spaces"/></>}/>
              <Route exact path="/about" element={<>
                 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
                 
              <About/> </>}
              
              />
              
            </Routes>
  </Router>
  </>
    
  );
}

export default App;
