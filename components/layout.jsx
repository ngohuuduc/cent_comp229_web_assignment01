/*
filename: layout.jsx
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/Logo.png';
export default function Layout() {
 return (
 <>
 < img src={logo}alt="football" className="football" width="125px" height="120px"/>
 <h1>The Bedroom Musician </h1>
 
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>| <Link to="/services">Services</Link>

<br/>
 <hr/>
 
 </>

 );
}
