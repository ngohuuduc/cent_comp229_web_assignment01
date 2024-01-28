/*
filename: services.jsx
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/

//import project1 from '../src/assets/project1.png';
//import project2 from '../src/assets/project2.jpg';
//import project3 from '../src/assets/project3.jpg';
//import project4 from '../src/assets/project4.jpg';
//import project5 from '../src/assets/project5.jpg';
//import project6 from '../src/assets/project6.jpg';
//import { Link } from 'react-router-dom';

import daservice from '../src/assets/data-warehousing1.png';
import odoo from '../src/assets/odoo erp.png';

import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">Data Analytics Consultings</h2>        
          <span className="worksDesc"> Data Warehouse and Data Pipeline </span> 
          <p> I have completed a number of full-stack BI projects which includes building Data Warehouse and building pipelines to captures multiple sourses of data and centralised them into a Single Data warehouse  </p>
          <p>  Afterward, users have tools and technique to build data model and then later visualise or report using Dashboard and Data Visualisation tools such as Tableau, PowerBI. </p>
          <p><img src={daservice} class="center" /></p>


          <h2 className="worksTitle">Odoo ERP Consulting</h2>        
          <span className="worksDesc"> ERP Consulting in Sales, Accounting(IFRS), Inventory, Manufacturing  </span> 
          <p><img src={odoo} class="center" /></p>
          <p> ERP will be the transactional system that helps your business to operate on a Single System, eliminate all the needs of integration or running on multiple systems  </p>
          
          <br></br>

     </section>
    

     </>
    }
    