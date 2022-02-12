import React from 'react';
import './App.css';
import  Home from'./home';
import  Contact from './contact';
import About from  './about';
import {Link} from 'react-router-dom'



function NavBar(){
    return(

      <div className='App-header'>

       <ul className='Links'>
         <Link to='/'>
         <li>Home</li>
         </Link>
         <Link to="./about">
         <li>About</li>
        </Link>
        <Link to="./contact">
         <li> Contact</li>
         </Link>
       </ul>
      </div>
      

    )
}

export default NavBar;