import React from 'react';
import styles from './WelcomePage.module.css';
import { NavLink } from 'react-router-dom';
const WelcomePage = () => {
  return (
    <section className={styles.section_welcome}>
      <h1 className={styles.section_welcome_title}>Welcome to the Phonebook</h1>

      <div>
        <h2 className={styles.section_welcome_subtitle}>
          Easily manage your contacts
        </h2>
        <p className={styles.section_welcome_text}>
          Create, edit, and delete contacts quickly and conveniently.
        </p>
      </div>

      <nav className={styles.section_welcome_navigation}>
        <NavLink
          className={styles.section_welcome_navigation_register}
          to={'/register'}
        >
          Register
        </NavLink>
        <NavLink
          className={styles.section_welcome_navigation_login}
          to={'/login'}
        >
          Login
        </NavLink>
      </nav>

      <p className={styles.section_welcome_footer}>&copy; 2023 Phonebook</p>
    </section>
  );
};

export default WelcomePage;
