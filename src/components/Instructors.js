import React from 'react';
import nwjja from '../json/nwjja.json'

const Instructors = () => {
    const InstructorList = nwjja.instructors.map(ins => {
        <div>
            {ins.name}
            <p>Hello</p>
        </div>
    })
    return (
        <div>
            {InstructorList}
        </div>  
    )
}

export default Instructors;