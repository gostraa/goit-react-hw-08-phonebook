import React, { useState } from 'react';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authThunk/authThunk';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    setLoginInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginThunk({ email: loginInfo.email, password: loginInfo.password })
    )
      .then(() => {
        navigate('/contacts');
      })
      .catch(error => {
        setLoginInfo({ email: '', password: '' });
      });
  };
  return (
    <section className={styles.section_login}>
      <h1 className={styles.section_login_title}>Login</h1>
      <form onSubmit={handleSubmit} action="/login" method="POST">
        <div className={styles.input_container}>
          <label htmlFor="userEmail" className={styles.label}>
            Email:
          </label>
          <input
            type="text"
            id="userEmail"
            name="email"
            value={loginInfo.email}
            className={styles.input_field}
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
            value={loginInfo.password}
            className={styles.input_field}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.input_container}>
          <button type="submit" className={styles.button_login}>
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
