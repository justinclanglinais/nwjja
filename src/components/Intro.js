import React from 'react';
import nwjja from '../json/nwjja.json'

const Intro = () => {
    const Bullets = nwjja.intro.bullets.map(bullet => {
        return (
            <div className="column">
                <p>
                    {bullet}
                </p>
            </div>
        )
    })
    return (
        <div className="section-dark">
            <div>
                <h1>
                    Join Our 5-Week Beginner Course
                </h1>
            </div>
            <div className="section-3-grid">
                {/* <div>
                    <h1>Intro</h1>
                </div>
                <div>
                    {Bullets}
                </div>
                <div>
                    
                </div> */}
                {Bullets}
            </div>
        </div>
    )
}

export default Intro;