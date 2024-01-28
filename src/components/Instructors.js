import React from 'react';
import nwjja from '../json/nwjja.json'
import logo from '../logo192.png'

const Instructors = () => {
    const InstructorList = nwjja.instructors.map(ins => {
        return (
            <div className='column'>
                <img src={logo} alt='logo'/>
                <h3>
                    {ins.name}
                </h3>
                <h5>
                    {ins.rank}
                </h5>
                <p>
                    {ins.about}
                </p>
            </div>
            // <div>
            //     <div>
            //         <h3>
            //             {ins.name}
            //         </h3>
            //     </div>
            //     <div>
            //         <h5>
            //             {ins.rank}
            //         </h5>
            //     </div>
            //     <div>
            //         {ins.about}
            //     </div>
            // </div>
        )
    })
    return (
        <div className="section">
            <div>
                <h1>Instructors</h1>
            </div>
            <div className="section-2-grid-ins">
                {InstructorList}
            </div>
        </div>
    )
}

export default Instructors;