import React, {useEffect, useState} from 'react'
import { Link, useLocation, UseLocation } from "react-router-dom"

// MATERIAL UI IMPORTS
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PsychologyIcon from '@mui/icons-material/Psychology';

function Navbar() {

    // STATE FOR NAVBAR
    const [ expandNavbar, setExpandNavbar] = useState(false);

    // "useLocation" VARIABLE TO GET INFORMATION ON CURRENT ROUTE
    const location = useLocation();
        // useEffect for when location changes - if location changes navbar dissapears(false)
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

  return (
    
    // TERNARY WITH ID FOR NAVBAR "TRUE IS OPEN" & "FALSE IS CLOSED"
    <div className='navbar' id={expandNavbar ? "open" : "close" }>
    
    <div className='toggleButton'>
        <button onClick={ () => {
            setExpandNavbar((prev) => !prev);
        }}> 
        < ReorderIcon /> </button>
    </div>

    <div className='links'>
        <Link to="/"> < HomeIcon /> Home  </Link>
        <Link to="projects"> < WorkIcon /> Projects </Link>
        <Link to="experience"> < PsychologyIcon />  Experience </Link>
    </div>


    </div>
  );
}

export default Navbar