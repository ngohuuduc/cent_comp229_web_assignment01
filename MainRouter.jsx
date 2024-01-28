/*
filename: MainRouter.jsx
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
import Layout from './components/layout'
import Services from './src/services'

const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/education" element={<Education />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/services" element={<Services />} />


 
 </Routes>
 </div>
 )
}
export default MainRouter

