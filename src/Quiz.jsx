import React from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';



const Quiz = () => {
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz2');
      };


  return (
    <>
    <Header />
    <div className="bodyC">
      <div className='user-info1'>
        <h1><span>1. </span>Before we start, what is your name?</h1>
        <form onSubmit={handleSubmit}>
          <div className="form1">
            <div className="field1">
              <label>First name</label>
              <input type='text' name='fname' placeholder='Jane'/>
              <div className="underline"></div>
            </div>
            <div className="field1">
              <label>Last name</label>
              <input type='text' name='lname' placeholder='Smith'/>
              <div className="underline"></div>
            </div>
            <div className="buttonQ1">
            <button type="submit">OK</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Quiz;
