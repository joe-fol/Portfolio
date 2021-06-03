import React from 'react';
import styles from './ContactMe.module.scss';
import HeadingBar from '../../components/HeadingBar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const ContactMe = () => {
  return (
    <>
      <section id='contact' className={styles.header}>
        <HeadingBar header="Contact me" />
      </section>
      <article className={styles.contactPage}>
        <div className={styles.formRight}>
          <ContactForm />
        </div>
      <form className={styles.formLeft}>
        <p>
          Thanks for taking the time to look at my page, I hope it didn't
          disapoint.
        </p>
        <p>
          Like what you see? or dont? Have a burning idea but not sure where to
          start? Have any questions feel free to ask.
        </p>
        <p>Many thanks,</p>
        <p>Joe Folkard</p>
      </form>
      </article>
      <Footer />
    </>
  );
};

export default ContactMe;
