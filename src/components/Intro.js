import React from 'react';
import nwjja from '../json/nwjja.json'
import logo from '../logo192.png'


const Intro = () => {
    const Bullets = nwjja.intro.bullets.map(bullet => {
        return (
            <div className="column">
                <img src={logo} alt="logo"/>
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
                {Bullets}
            </div>
            <div>
                <button>
                    Click Here For More Information
                </button>
            </div>
        </div>
    )
}

export default Intro;