import React from 'react';
import nwjja from '../json/nwjja.json'
import logo from '../logo192.png'

const Programs = () => {
    const ProgramsList = nwjja.programs.map(program => {
        return (
            <div className='column'>
                <img src={logo} alt="logo" />
                <h3>
                    {program.name}
                </h3>
                <p>
                    {program.desc}
                </p>
            </div>
        )
    })
    return (
        <div className="section-light">
            <div>
                <h1>Programs</h1>
            </div>
            <div className="section-3-grid">
                {ProgramsList}
            </div>
        </div>  
    )
}

export default Programs;