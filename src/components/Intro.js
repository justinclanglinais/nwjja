import React from 'react';
import nwjja from '../json/nwjja.json'

const Intro = () => {
    const Bullets = nwjja.intro.bullets.map(bullet => {
        return (
            <div>
                <p>
                    {bullet}
                </p>
            </div>
        )
    })
    return (
        <div className="section">
            <div>
                <h1>Intro</h1>
            </div>
            <div>
                {Bullets}
            </div>
        </div>
    )
}

export default Intro;