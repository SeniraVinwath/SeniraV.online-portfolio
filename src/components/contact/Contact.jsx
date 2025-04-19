import React, { useState } from 'react'
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { LuMap } from "react-icons/lu";
import axios from 'axios';

import './contact.css';

// Maximum allowed characters for message
const MAX_MESSAGE_LENGTH = 1000;

const Contact = () => {
    const [form, setform] = useState({name: '', email:'', subject:'', message: ''});
    const [submitStatus, setSubmitStatus] = useState({success: false, error: false, message: ''});
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setform({...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus({success: false, error: false, message: ''});
        
        // Check if message is too long, but don't show the user
        if (form.message.length > MAX_MESSAGE_LENGTH) {
            // Silently truncate the message to the max length
            const truncatedForm = {
                ...form,
                message: form.message.substring(0, MAX_MESSAGE_LENGTH)
            };
            
            submitForm(truncatedForm);
        } else {
            submitForm(form);
        }
    }
    
    const submitForm = (formData) => {
        axios.post('https://api.sheetbest.com/sheets/9d45a680-91f0-4664-be46-fb26ac2ef665', formData)
            .then((response) => { 
                console.log(response);
                setSubmitStatus({
                    success: true, 
                    error: false, 
                    message: 'Thank you! Your message has been sent successfully.'
                });
                // Clear form after successful submission
                setform({name: '', email:'', subject:'', message: ''});
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                setSubmitStatus({
                    success: false, 
                    error: true, 
                    message: 'Failed to send message. Please try again.'
                });
            });
    }
    
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">CONTACT ME</h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <LuMap/>
                        </span>
                        
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">"Salsiri", Rupeewala, Boossa</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser/>
                        </span>
                        
                        <h3 className="contact__card-title">Freelance</h3>
                        <p className="contact__card-data">Available Right Now</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <IoMailOpenOutline/>
                        </span>
                        
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">chandumendis05@gmail.com</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <RiContactsBook3Line/>
                        </span>
                        
                        <h3 className="contact__card-title">Mobile</h3>
                        <p className="contact__card-data">+94 78 157 4975</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">YOUR FULL NAME <b>*</b></label>
                            <input type="text" name='name' onChange={handleChange} value={form.name} className="contact__form-input" required />
                        </div>
                        
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">YOUR EMAIL ADDRESS <b>*</b></label>
                            <input type="email" name='email' onChange={handleChange} value={form.email} className="contact__form-input" required />
                        </div>
                        
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">YOUR SUBJECT <b>*</b></label>
                            <input type="text" name='subject' onChange={handleChange} value={form.subject} className="contact__form-input" required />
                        </div>
                        
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag text-cs">YOUR MESSAGE <b>*</b></label>
                            <textarea 
                                name='message' 
                                onChange={handleChange} 
                                value={form.message} 
                                className='contact__form-input'
                                maxLength={MAX_MESSAGE_LENGTH} // This enforces limit at the browser level
                                required
                            ></textarea>
                            {/* Character counter removed */}
                        </div>
                    </div>
                    
                    {submitStatus.message && (
                        <div className={`submit-status ${submitStatus.error ? 'error' : submitStatus.success ? 'success' : ''}`}>
                            {submitStatus.message}
                        </div>
                    )}
                    
                    <div className="contact__submit">
                        <p>* Kindly keep it professional.</p>
                        <button type='submit' className='btn text-cs'>SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact