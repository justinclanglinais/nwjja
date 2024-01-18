import React from 'react';
import nwjja from '../json/nwjja.json'

const About = () => {
    return (
        <div>
            <h1>
                About
            </h1>
            <p>
                {nwjja.profile.history}
            </p>
        </div>
    )
}

export default About;