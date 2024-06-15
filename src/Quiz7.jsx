import React, { useState } from 'react';
import './Quiz7.css';
import salary from './assets/img/salary.png';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const salaryRanges = [
  '<$30,000',
  '$30,000 - $50,000',
  '$50,000 - $80,000',
  '$80,000 - $120,000',
  '$120,000 - $250,000',
  '$250,000 or more'
];

const Quiz7 = () => {
  const [selectedRange, setSelectedRange] = useState('');
  const navigate = useNavigate();

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz8');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className='containerQ7'>
        <div className='user-info7'>
          <h1><span>7. </span> How would you describe your current level of coding experience? What is your current annual compensation? (Optional)</h1>
          <h2>Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</h2>
        
          <form onSubmit={handleSubmit}>
            <div className="form7">
              <div className="field7">
                {salaryRanges.map((range, index) => (
                  <div key={index} className="range-item">
                    <input
                      type="radio"
                      id={`range-${index}`}
                      name="salaryRange"
                      value={range}
                      checked={selectedRange === range}
                      onChange={() => handleRangeChange(range)}
                    />
                    <label htmlFor={`range-${index}`}>{range}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="buttonQ7">
              <button type="button" className='back' onClick={handleBackClick}>BACK</button>
              <button type="submit">OK</button>
            </div>
          </form>
        </div>
        <div className='Aimage-container'>
          <img src={salary} id='rateBanner' alt="salary" />
        </div>
      </div>
    </>
  );
};

export default Quiz7;
