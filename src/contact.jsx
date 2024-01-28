/*
filename: contact.css
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/

import '../src/contact.css'


export default function Contact() {

     
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> 
                    <button onclick="goToHomePage()">Go to Homepage</button>

                         <script>
                         function goToHomePage() {
                              window.location.href = '/' 
                         }
                         </script>
                    <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong> +65 90877658 </strong></i></p>
          <p>Linkedin:www.xyz.facebook.com</p>
          <p>email:xyz@yahoo.com</p>
     </>
     );
     }
    