import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Quiz3.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const countries = [
    'Select a country',
    'United States',
    'United Kingdom',
    'China',
    'Canada',
    'United Arab Emirates',
    'Australia',
    'Andorra',
    'Afghanistan',
    'Antigua and Barbuda',
    'SrLanka',
    
];

const Quiz3 = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz4');
    };

    const handleBack = () => {
        navigate(-1); 
    };

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setShowDropdown(false); 
    };

    return (
        <div className="Quiz3Container">
            <div className='page3'>
                <Header />
                <div className='user-info3'>
                    <h1><span>3. </span>Which country are you from? 🏡🏡🏡</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form3">
                            <div className="field3">
                                <label></label>
                                <div className="Cdropdown-container">
                                    <input className='Cinput'
                                        type='text'
                                        name='country'
                                        placeholder='Select an option'
                                        value={selectedCountry}
                                        onClick={toggleDropdown}
                                        readOnly 
                                    />
                                    <FontAwesomeIcon icon={faAngleDown} className="Cdropdown-icon" onClick={toggleDropdown} />
                                    {showDropdown && (
                                        <div className="Cdropdown-list">
                                            {countries.map((country, index) => (
                                                <div
                                                    key={index}
                                                    className="Cdropdown-item"
                                                    onClick={() => handleCountrySelect(country)}
                                                >
                                                    {country}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="Cbutton">
                            <button className='back' type="button" onClick={handleBack}>BACK</button>
                            <button type="submit">OK</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quiz3;
