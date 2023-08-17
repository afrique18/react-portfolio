import React, { useState } from 'react';
// import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const validateName = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!name){
        setErrorMessage('Name is required');
        return;
    } else {
        if (!email){
            setErrorMessage('Email is required');
            return;
        } else {
            if (!validateEmail(email)){
                setErrorMessage('Email is invalid.');
                return;
            } else{
                if (!message){
                    setErrorMessage('Message is required.');
                    return;
                }
            }
        }
    }
  }
  const validateEmailField = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email){
        setErrorMessage('Email is required.');
        return;
    } else {
        if (!validateEmail(email)){
            setErrorMessage('Email is invalid.');
            return;
        } else {
            if (!name){
                setErrorMessage('Name is required.');
                return;
            } else {
                if (!message){
                    setErrorMessage('Message is required');
                    return;
                }
            }
        }
    }
  }
  const validateMessage = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!message){
        setErrorMessage('Message is required');
        return;
    } else {
        if (!email){
            setErrorMessage('Email is required');
            return;
        } else {
            if (!validateEmail(email)){
                setErrorMessage('Email is invalid.');
                return;
            } else{
                if (!name){
                    setErrorMessage('Name is required.');
                    return;
                }
            }
        }
    }
  }

  return (
    <div className="container text-center">
      <h3> Fill out the form below. </h3>
      <form className="form" >
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={validateEmailField}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={validateName}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={validateMessage}
          type="message"
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
