/*
filename: contact.css
Student Name: Duc Ngo
Student ID : 301221389
Date : 28 Jan 2024
*/
import React, { useRef } from 'react';
import '../src/contact.css';

export default function Contact() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = () => {
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;

        const confirmMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\nDo you want to submit this information?`;
        
        if (window.confirm(confirmMessage)) {
            // Proceed with redirection
            window.location.href = '/';
        }
    };

    return (
        <>
            <p>Contact</p>
            <form id="ffp">
                <label htmlFor="myFName"> *First Name: </label>
                <input type="text" id="myFName" name="myFName" required autoFocus ref={firstNameRef} /> <br /> <br />

                <label htmlFor="myLName"> *Last Name: </label>
                <input type="text" id="myLName" name="myLName" required ref={lastNameRef} /> <br /> <br />

                <label htmlFor="myEmail"> *Email: </label>
                <input type="email" id="myEmail" name="myEmail" required ref={emailRef} /> <br /> <br />

                <input type="button" className="submit" value="Submit" onClick={handleSubmit} />

                <br /><br />
            </form>

            <p><i>Call me on: <strong> +65 90877658 </strong></i></p>
            <p>Linkedin: www.linkedin.com/in/ducngosg</p>
        </>
    );
}


    