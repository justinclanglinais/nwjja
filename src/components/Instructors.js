import React from 'react';
import nwjja from '../json/nwjja.json'

const About = () => {
    return (
        <div>
            {nwjja.instructors.map = (i) => {
                return (
                <div>
                    {i.name}
                    <p>
                        HI THERE
                    </p>
                </div>
                )
            }}
        </div>
    )
}

export default About;