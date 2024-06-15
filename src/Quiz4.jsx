import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Quiz4.css';

const Quiz4 = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz5');
    };

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <>
            <Header />
            <div className="Quiz4Container">
                <div className="page4">
                    <div className='user-info4'>
                        <h1><span>4. </span>What's your Phone Number?</h1>
                        <h2>This is how we'll contact you.</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form4">
                                <div className="field4">
                                    <input type='text' name='Cnumber' placeholder='0711234567' className="Cnumber"/>
                                    <div className="underlineQ4"></div>
                                </div>
                                <div className="Q4button">
                                    <button className='back' type="button" onClick={handleBack}>BACK</button>
                                    <button type="submit">OK</button>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz4;
