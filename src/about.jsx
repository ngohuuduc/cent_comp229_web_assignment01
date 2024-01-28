/*
filename: about.jsx
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/

//import BBG from '../src/assets/BBG.jfif';
import sap from '../src/assets/logo_SAP_S4HANA.jpeg'; // src/assets/
import tableau from '../src/assets/tableau-logo-150x150.jpg'; // /Users/ducngo/GitHub/cent_comp229_web_assignment01/src/assets/tableau-logo-150x150.jpg
import powerbi from '../src/assets/power-bi-logo-400x400-1-150x150.jpg'; // power-bi-logo-400x400-1-150x150.jpg
import databrick from '../src/assets/databricks-logo-150x150.png'; // /Users/ducngo/GitHub/cent_comp229_web_assignment01/src/assets/databricks-logo-150x150.png
import aws from '../src/assets/aws-logo-1536x1152-1-150x150.png'; 
import azure from '../src/assets/Microsoft_Azure-Logo.wine.png'; 
import gcp from '../src/assets/Google-Cloud-Platform-GCP-Logo.png'; 

// import app from '../src/assets/power-bi-logo-400x400-1-150x150.jpg';

// /Users/ducngo/GitHub/cent_comp229_web_assignment01/src/assets/CV.pdf
//import hire from '../src/assets/hire.jpg';
// import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle"> Duc Ngo's Experiences</span>
          <a href="../src/assets/CV.pdf" download="YourFileName.pdf">PDF Resume</a>



          <span className="skillDesc">My job consists in helping companies from implementing transactions systems (ERP), data pipelines, data warehouse to data visualization. 
          
           I'm also experienced in most data-science steps: data pre-processing, application of statistical methods, data visualization and results communication.</span> 

           <br></br>

           <span className="skillDesc2">          
           I'm also experienced in all data-science steps: data pre-processing, application of statistical methods, data visualization and results communication. </span> 
           <br></br>

          <span className="skillDesc2"> I use Python, SQL & R intensively.  </span> 
          <br></br>
           <span className="skillDesc2"> I enjoy playing music in my freetime</span> 


          <div className="skillBar">
               <img src={sap} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>SAP S/4 HANA (ERP) </h2>
               <p>Implementation experience in Singapore, Malaysia, Philipppines, Vietnam and Indonesia.</p>
               <p>Focus on Master Data Goverance </p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={tableau} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Tableau: Dashboard, Reporting and Infrastructure - 4 Projects</h2>

               <p>Tableau Data Modeling from Data Warehouse to Report & Dashboard.</p>
               <p>Experience in Tableau Cluster Deployment and Maintenance</p>
               </div>

          </div>

          <div className="skillBar">
               <img src={powerbi} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Dashboard & Reporting - 5 Projects </h2>
               <p>Modeling and Implement Dashboard and Reports. </p>
               </div>

          </div>
          <div className="skillBar">
               <img src={databrick} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Analytics and Data Pipeline</h2>
               <p>Maintain full stack of data processing, from ingestion to Analytics and reporting.</p>
               <p>Used Technnology: Scalar , Python, PySpark and R. </p>

               </div>
          </div>          

          <div className="skillBar">
               <img src={aws} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2> Cloud Deployment and Implementation </h2>
               <p> AWS EC2, Amplify, Lambda, RDS</p>
               </div>
          </div>          
          <div className="skillBar">
               <img src={azure} alt="AppDesign" className="skillBarImg"  />
               <div className="skillBarText">
               <h2>Cloud Deployment and Implementation</h2>
               <p>Virtual Machines, PostgreSQL, Entra ID , Office 365 and Azure Monitor.</p>
               </div>
          </div>          
          <div className="skillBar">
               <img src={gcp} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Cloud Deployment and Implementation </h2>
               <p>Cloud Storage, BigQuery and DataPrep.</p>
               </div>
          </div>          
                  
     </section>
    

     </>
    }
    