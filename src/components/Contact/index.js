import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Please input a valid email.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
            }
            
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return ( 
    
        <section className="contact-text contact-grid">
            <div>
                <h2>Message Me:</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label><br />
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" data-testid="button">Submit</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Contact Info:</h2>
                <p>(647) 447-7429</p>
                <p>shawn@shawnevans.com</p>
                <p>https://github.com/bluesatyr</p>
                <p>https://www.linkedin.com/in/shawn-c-evans/</p>
            </div>
            
        </section>)
}

export default ContactForm;