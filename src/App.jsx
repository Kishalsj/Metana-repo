import React from 'react';
import './App.css'; 
import banner from './assets/img/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from './Header';



const App = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/quiz');
  };


  return (


<>


<Header></Header>

    <div className="container">
      
      <main className="main">
        <section className="info">
          <h2>Launch your Data Career in Weeks, not Years</h2>
          <p>What to expect:</p>
          <ul>
            <li><span className='short'>Short-answer</span> questions & <span className='no'>No</span> cover letter</li>
            <li>Takes 4 mins on average</li>
          </ul>
          <button onClick={handleClick} className="start-button" id='buttons'>Start Your Journey</button>
          <p className="icon"> 
            <span><FontAwesomeIcon icon={faPeopleGroup} /></span> 30 people have filled this out
          </p>
        </section>
        <section className="rating">
          <div className="rateBanner">
            <img src={banner} id='rateBanner' className="responsive-rateBanner" alt="Banner" />
          </div>
        </section>
      </main>
    </div>
    </>
  );
}

export default App;
