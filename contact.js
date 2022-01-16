import React from 'react';


function Contact(){
    return(
        <div>
     <div className='contact'>
      <h1>WeMob</h1>
      <p>Enter your data to the requested field</p>
        <label>FirstName
         <input id='text' type="text" id="fname" name="fname" />
        </label>
        <label> LastName   
         <input id='text'type="text" id="lname" name="lname" />
        </label>
        <label>Email
         <input id='text' type="text" id="email" name="email" />
        </label>
        <textarea id='text'>

        </textarea>
        <input id='submit'type="submit" value="Submit"/>
        </div>
        <footer className='footer'>
            This website is created by DORIAN DODA
            @ 04/01/2022

        </footer>
   </div>
    )
}

export default Contact;