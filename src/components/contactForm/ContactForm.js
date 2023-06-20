import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import classes from './ContactForm.module.css';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setMessage('Message Sent Successfully');
  };

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_zsctbsi', 'template_fsudj76', form.current, 'cIc6POE8KxFh268T8').then(
  //     (result) => {
  //       console.log(result.text);
  //       e.target.reset();
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  // };
  return (
    <div className={classes['contactform-container']}>
      <h1 className={classes['contactme-heading']}>Contact Me</h1>
      <div className={classes['sent-message']}>{message}</div>
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          {...register('fullname', { required: true })}
          placeholder="full name"
        />
        {errors.fullname?.type === 'required' && 'Full Name is required'}
        <label>Email</label>
        <input type="email" name="user_email" placeholder="email..." />
        <label>Message</label>
        <textarea name="message" placeholder="message" />
        <input type="submit" value="Send" />
      </form> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          {...register('fullname', { required: true })}
          placeholder="full name..."
        />
        <div className={classes['error-message']}>
          {errors.fullname?.type === 'required' && 'Full Name is required!'}
        </div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} placeholder="email..." />
        <div className={classes['error-message']}>
          {errors.email?.type === 'required' && 'Email is required!'}
        </div>
        <label>Message</label>
        <textarea {...register('message', { required: true })} placeholder="your message..." />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
