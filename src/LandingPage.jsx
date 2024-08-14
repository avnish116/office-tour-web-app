import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const [fadeClass, setFadeClass] = useState('fadeOut');

    useEffect(() => {
        setTimeout(() => setFadeClass('fadeIn'), 500);
    }, []);

    return (
        <div className="landing-page">
            <div className="header">
                <h1>Welcome to Nadi Office</h1>
            </div>
            <div className="content">
                <div className="star-one">
                    <Link to="/virtual-tour">
                        <button className={`start ${fadeClass}`}>Start Office Tour</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
