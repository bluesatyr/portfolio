import React from 'react'; // { useState }
// import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Please input a valid email.');
    //         } else {
    //             if (!e.target.value.length) {
    //               setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //               setErrorMessage('');
    //             }
    //         }
            
    //     }
    //     console.log('errorMessage', errorMessage);
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //       }
    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return ( 
    
        <section className="contact-text contact-grid">
            <div className="contact-info">
                <h2>Contact Info:</h2>
                <p>(647) 447-7429</p>
                <p><a href="mailto:shawn@shawnevans.com">shawn@shawnevans.com</a></p>
                <p><a href="https://github.com/bluesatyr" target="_blank" rel="noopener noreferrer">GitHub: /bluesatyr</a></p>
                <p><a href="https://www.linkedin.com/in/shawn-c-evans/" target="_blank" rel="noopener noreferrer">LinkedIn: /shawn-c-evans</a></p>
            </div>
            
        </section>)
}

export default ContactForm;