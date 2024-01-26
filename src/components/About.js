import React from 'react';
import nwjja from '../json/nwjja.json'
import logo from '../logo192.png'

const About = () => {
    return (
        <div className="section">
            <div className="section-2-grid">
                <div className="column-left">
                    <h1>
                        Welcome to the Northwest Jiu Jitsu Academy
                    </h1>
                    <p>
                        {nwjja.profile.history}
                    </p>
                </div>
                <div className="column-right">
                    <img src={logo} alt="nwjja-logo" />
                </div>
            </div>
        </div>
        
    )
}

export default About;