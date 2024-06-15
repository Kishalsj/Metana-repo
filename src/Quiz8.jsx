import React, { useState } from 'react';
import './Quiz8.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Quiz8 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showTermsWarning, setShowTermsWarning] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowWarning(false);
    setShowTermsWarning(false);
    if (option === 'A') {
      navigate('/quiz9');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedOption) {
      setShowWarning(true);
    } else {
      console.log(`Selected option: ${selectedOption}`);
      if (selectedOption === 'A') {
        navigate('/quiz9');
      }
    }
  };

  const handleDecline = () => {
    handleOptionChange('B');
    setShowTermsWarning(true);
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <>
      <Header />
      <div className="CScontainer">
        <div className="page8">
          <form onSubmit={handleSubmit}>
            <h1><span>8. </span> Certifying Statement*</h1>
            <h2>
              I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.
            </h2>
            <div className="button-group">
              <button
                type="button"
                className={`option-button ${selectedOption === 'A' ? 'selected' : ''}`}
                onClick={() => handleOptionChange('A')}
              >
                I accept
              </button>
              <button
                type="button"
                className={`option-button ${selectedOption === 'B' ? 'selected' : ''}`}
                onClick={handleDecline}
              >
                I don't accept
              </button>
            </div>
            {showWarning && <p className="warning-message"> ⚠️Oops! Please make a selection</p>}
            {showTermsWarning && <p className="warning-message">⚠️Please agree to the terms & conditions</p>}
            <div className="buttonsQ8">
              <button type="button" className='back' onClick={handleBackClick}>BACK</button>
              <button type="submit" className="submit-button">OK</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Quiz8;
