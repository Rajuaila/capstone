// Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={onLogin} />
      <p>
        Don't have an account? <Link to='/register'>Click here to register</Link>
      </p>
    </div>
  );
};

export default Login;