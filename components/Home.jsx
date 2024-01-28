/*
filename: Home.jsx
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/


//import BBG from '../src/assets/BBG.jfif';
import portrait from '../src/assets/portrait.jpg'
// import hire from '../src/assets/hire.jpg';
//import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">

          {/* sample code from professor*/}

          {/*
          <span className="hello">Hello,</span><br/>

          <span className="introText">I am <span className="introName">Blessing Ajiboye</span> 

          <img src={BBG} alt="profile" className="bbg" width="750" height="750" align="right" />

          <br/>Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p>

          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          */}
          <body> 
          <p>Hello, I'm Duc</p>
<p>Previously a Data Analyst with Finance &amp; Project Management background. Experienced in multinational projects at different scale, complexity &amp; diversity Singapore, Indonesia, Malaysia, Vietnam and Philippines.&nbsp;</p>
<p>I&rsquo;m currently exploring North America as 2-years of gap time after 12 years of non-stop working. Other than being a Professional, I also enjoy playing music at home, and this is the reason why I called myself Bedroom Musician.</p>
<p><img src={portrait} class="center" /></p>
           </body>
           
          </div>
          
     </section>
    

     </>
     }
    