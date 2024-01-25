import React from 'react';
import nwjja from '../json/nwjja.json'

const Programs = () => {
    const ProgramsList = nwjja.programs.map(program => {
        return (
            <div>
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
        <div className="section">
            <div>
                <h1>Programs</h1>
            </div>
            <div>
                {ProgramsList}
            </div>
        </div>  
    )
}

export default Programs;