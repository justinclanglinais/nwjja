import React from 'react';
import nwjja from '../json/nwjja.json'

const Contact = () => {
    return (
        <div className="section-light">
            <h1>
                Contact Us
            </h1>
            <p>
                Contact us <a href="http://www.nwjja.net">here</a>
            </p>
            <div>
                <form>
                    <label for="fname">Name:</label>
                    <input type="text" id="fname" name="fname"></input>
                    <br/>
                    <label for="femail">Email:</label>
                    <input type="text" id="femail" name="femail"></input>
                    <br/>
                    <label for="fmsg">Message:</label>
                    <textarea type="text" id="fmsg" name="fmsg"></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact;