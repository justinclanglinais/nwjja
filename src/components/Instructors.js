import React from 'react';
import nwjja from '../json/nwjja.json'

const Instructors = () => {
    const InstructorList = nwjja.instructors.map(ins => {
        return (
            <div>
                <div>
                    {ins.name}
                </div>
                <div>
                    {ins.rank}
                </div>
                <div>
                    {ins.about}
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>
                <h1>Instructors</h1>
            </div>
            <div>
                {InstructorList}
            </div>
        </div>
    )
}

export default Instructors;