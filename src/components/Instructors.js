import React from 'react';
import nwjja from '../json/nwjja.json'

const Instructors = () => {
    const InstructorList = nwjja.instructors.map(ins => {
        return (
            <div>
                <div>
                    <h3>
                        {ins.name}
                    </h3>
                </div>
                <div>
                    <h5>
                        {ins.rank}
                    </h5>
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