import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwkalawy");
  if (state.succeeded) {
      return <p className={styles.signUp}>Thanks for reaching out, I will do my very best to respond quickly!</p>;
  }
  return (
      <form action='https://formspree.io/f/mwkalawy' onSubmit={handleSubmit} method='post'>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        className={styles.error}
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        className={styles.error}
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;