import React from 'react';
import'./App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import NavBar from './navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      
    <div className="App">
      
      <NavBar/>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>

      </Routes>
         
       
       
       

    </div>
    </Router>
  );
}

export default App;
