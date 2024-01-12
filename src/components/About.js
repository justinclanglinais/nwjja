import React from 'react';
import nwjja from '../json/nwjja.json'

const About = () => {
    return (
        <div>
            <h2>
                {nwjja.profile.history}
            </h2>
        </div>
    )
}

export default About;