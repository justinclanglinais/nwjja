import React from 'react';
import nwjja from '../json/nwjja.json'

const About = () => {
    return (
        <div>
            <h2>
                About
            </h2>
            <p>
                {nwjja.profile.history}
            </p>
        </div>
    )
}

export default About;