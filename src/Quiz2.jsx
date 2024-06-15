import React from 'react';
import './Quiz2.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Quiz2 = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz3');
    };

    const handleBack = () => {
       
        navigate(-1); 
    };

    return (
        <div className="Quiz2Container">
            <div className='page2'>
                <Header />
                <div className='user-info2'>
                    <h1><span>2. </span>What's your email address?</h1>
                    <h2>This is how we'll contact you.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form2">
                            <div className="field2">
                            
                                <input type='email' name='email' placeholder='example@gmail.com' />
                                <div className="underline2"></div>
                            </div>
                            <div className="Q2button">
                            <button className='back' type="button" onClick={handleBack}>BACK</button>
                            <button type="submit">OK</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quiz2;
