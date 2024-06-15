import React, { useState } from 'react';
import './Quiz5.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const languages = [
    'Solidity', 'Rust', 'Node.js', 'Typescript', 'Javascript', 'C', 'C++', 'C#',
    'SQL', 'Python', 'Assembly Language', 'Haskell', 'R', '.NET', 'Other'
];

const Quiz5 = () => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const navigate = useNavigate();

    const handleLanguageToggle = (language) => {
        setSelectedLanguages((prevSelected) =>
            prevSelected.includes(language)
                ? prevSelected.filter((lang) => lang !== language)
                : [...prevSelected, language]
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz6');
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Header />
            <div className="Quiz5Container">
                <div className="page5">
                    <div className='user-info5'>
                        <h1><span>5. </span>What languages and frameworks are you familiar with?</h1>
                        <h2>Select all the languages you know.</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form5">
                                <div className="field5">
                                    <div className="languages-grid">
                                        {languages.map((language, index) => (
                                            <div key={index} className="language-item">
                                                <input
                                                    type="checkbox"
                                                    id={`lang-${index}`}
                                                    name="languages"
                                                    value={language}
                                                    checked={selectedLanguages.includes(language)}
                                                    onChange={() => handleLanguageToggle(language)}
                                                />
                                                <label htmlFor={`lang-${index}`}>{language}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="buttonsQ5">
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

export default Quiz5;
