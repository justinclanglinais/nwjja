import React from 'react';
import nwjja from '../json/nwjja.json'

const Instructors = () => {
    const InstructorList = nwjja.instructors.map(ins => {
        return (
            <div>
                {ins.name}
            </div>
        )
    })
    return (
        <div>
            {InstructorList}
        </div>  
    )
}

export default Instructors;