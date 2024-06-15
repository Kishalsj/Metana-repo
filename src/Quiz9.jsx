import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz9.css'; 
import Header from './Header';

const Quiz9 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <>
      <Header />
      <div className='containerQ9'>
        <div className='user-info9'>
          <h1><span>9. </span>LinkedIn URL (optional)</h1>
          <h2>Here's a snippet link to make your life easy - <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a> (It'll open in a new tab) 🚀</h2>
          <form>
            <div className="form9">
              <div className="field9">
                
                <input type='text' name='linkedin' placeholder='Type your Answer' id="linkedin" className="input" />
              </div>
            </div>
            <div className="buttonQ9">
              <button type="button" className='back' onClick={handleBackClick}>BACK</button>
              <button type="submit" className='sub'>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Quiz9;
