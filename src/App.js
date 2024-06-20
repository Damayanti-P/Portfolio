import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project';





function App() {
  return (
    <div className=''>
     
 
    <NavBar/>
    <Banner/>
     <Skills/>
     <Project/> 
   </div>
  );
}

export default App;
