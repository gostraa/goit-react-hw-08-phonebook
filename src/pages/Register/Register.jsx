import { useState } from 'react';
import styles from './Register.module.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/authThunk/authThunk';

const Register = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userEmail: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: userInfo.userName,
      email: userInfo.userEmail,
      password: userInfo.password,
    };

    dispatch(registerThunk(newUser));
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Register</h1>
      <form onSubmit={handleSubmit} action="/register" method="POST">
        <div className={styles.input_container}>
          <label htmlFor="username" className={styles.label}>
            User Name:
          </label>
          <input
            type="text"
            id="username"
            name="userName"
            className={styles.input_field}
            value={userInfo.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.input_container}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="userEmail"
            className={styles.input_field}
            value={userInfo.userEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.input_container}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input_field}
            value={userInfo.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.input_container}>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
