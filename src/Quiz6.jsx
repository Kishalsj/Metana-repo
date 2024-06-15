import React, { useState } from 'react';
import './Quiz6.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const experienceLevels = [
  'No experience (I have never programmed before.)',
  'Beginner (I have played with some introductory coding lessons and tutorials.)',
  'Intermediate (I have completed some coding classes or tutorials.)',
  'Advanced (I can build applications.)',
  'Professional (I am an experienced software engineer.)'
];

const Quiz6 = () => {
  const [selectedExperience, setSelectedExperience] = useState('');
  const navigate = useNavigate();

  const handleExperienceSelect = (level) => {
    setSelectedExperience(level);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz7');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="Q6containerQ6container">
      <div className="page6">
      <div className='user-info6'>
        <h1><span>5. </span> How would you describe your current level of coding experience?</h1>

        <form onSubmit={handleSubmit}>
          <div className="form6">
            <div className="field6">
              <div className="experience-grid">
                {experienceLevels.map((level, index) => (
                  <div key={index} className="experience-item">
                    <input
                      type="checkbox"
                      id={`exp-${index}`}
                      name="experience"
                      value={level}
                      checked={selectedExperience === level}
                      onChange={() => handleExperienceSelect(level)}
                    />
                    <label htmlFor={`exp-${index}`}>{level}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="buttonsQ6">
            <button className='back' type="button" onClick={handleBack}>BACK</button>
            <button type="submit">OK</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Quiz6;
