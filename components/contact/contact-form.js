import axios from 'axios';
import classes from './contact-form.module.css';
import { useRef, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

const ContactForm = () => {
  const notificationCxt = useContext(NotificationContext);
  const { showNotification, notification } = notificationCxt;

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    showNotification({
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    });

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

    try {
      const {
        data: { message },
      } = await axios.post('/api/contact', reqBody, reqHeaders);
      showNotification({
        status: 'success',
        title: 'Success!',
        message: message,
      });
    } catch (err) {
      showNotification({
        status: 'error',
        title: 'Message send failure',
        message: 'Something went wrong, try again later',
      });
    }
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
