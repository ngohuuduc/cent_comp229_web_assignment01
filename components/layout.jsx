import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/Logo.png';
export default function Layout() {
 return (
 <>
 < img src={logo}alt="football" className="football" width="150px" height="85px"/>
 <h1>The Bedroom Musician </h1>
 
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>

<br/>
 <hr/>
 
 </>

 );
}
