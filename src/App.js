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
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode'
        }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode'

        }
  }
  return(
    <>
    
    <Alert alert={alert}/>

    <Router>
            <Routes>
            

              <Route exact path="/" element={<>           
                 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
              <TextForm/></>}/>
              <Route exact path="/about" element={<>
                 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
              <About/></>}
              />
              
            </Routes>
  </Router>
  </>
    
  );
}

export default App;
