import axios from 'axios';
import classes from './contact-form.module.css';
import { useState, useRef } from 'react';

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const reqHeaders = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const reqBody = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };

    await axios.post('/api/contact', reqBody, reqHeaders);
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' name='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' name='name' id='name' ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            name='message'
            id='message'
            rows='5'
            ref={messageRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
