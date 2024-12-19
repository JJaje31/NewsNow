import React from 'react';
import Nav from '../../components/nav/nav.jsx'
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm.jsx'
import './Home.css'

const Home = () => {
 
    return(
        <>
      <Nav/>
      <div className="image">
    <div className="welcome">
    <WelcomeForm/>
    </div>
      </div>

  
    
        </>
    )
}

export default Home;