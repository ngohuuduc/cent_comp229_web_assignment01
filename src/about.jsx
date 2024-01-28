import BBG from '../src/assets/BBG.jfif';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle"> Duc Ngo's Experiences</span>
          <span className="skillDesc">My job consists in helping companies from implementing transactions systems (ERP), data pipelines, data warehouse to data visualization. Furthermore, I'm also experienced in most data-science steps: data pre-processing, application of statistical methods, data visualization and results communication.</span> 
          <span className='skillDesc2'>  Prior to pursuing Master of Science - Analytic @ Georgia Tech (top 5 Engineering School in US), I had my Master of Finance @ Massey University.
                    </span>
          <div className="skillBar">
               <img src={ux} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>UI/UX Design</h2>
               <p>This is a demo text, you can write your own content here.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={web} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Web Design</h2>
               <p>This text can be changed while making production ready website.</p>
               </div>

          </div>

          <div className="skillBar">
               <img src={app} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>App Design</h2>
               <p>You can write text related to mobile app development.</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    