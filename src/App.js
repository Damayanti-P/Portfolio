import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Banner from './components/Banner';





function App() {
  return (
    <div className=''>
     
 
    <NavBar/>
    <Banner/>
      
   </div>
  );
}

export default App;
