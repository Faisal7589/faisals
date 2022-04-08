import React from 'react';
import Homepage from './Homepage/homepage';
import Navbar from './Navbar/Navbar';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Projects from './pages/projects';
import Cv from './pages/cv';


function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
        <Navbar />
        </>
    )
}

export default App;