import React, { useState } from 'react';
import LogoB from '../assets/img/Logo_black.png';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = e => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail('');
    setPassword('');
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src={LogoB}
          alt=""
        />
        <h1 className="text-xl font-medium mb-2">Login as a User</h1>
        <form
          onSubmit={e => {
            submitHandler(e);
          }}
          action="">
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg ">
            Login
          </button>
        </form>
        <p className="text-center font-semibold">
          New here?{' '}
          <Link
            to="/signup"
            className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#dfa812] flex items-center justify-center font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg ">
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;