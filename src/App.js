import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Notes from './components/Notes'; 
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
    const [toggle, setToggle] = React.useState(false)


    return(
        <div className='main1'>
            <img src={toggle?"./images/false.png":"./images/true.png"} onClick={()=>setToggle(prev=>!prev)} className={toggle?"main--img1":"main--img2"} alt="btn"/ >
                    <Navbar toggle={toggle}/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="notes" element={<Notes/>}>
                            <Route path=":noteTitle" element={<Notes />}  />
                        </ Route>
                        <Route path="contact" element={<Contact/>}/>
                    </Routes>
        </div>
    )
}

export default App;