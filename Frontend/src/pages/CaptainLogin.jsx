import React, { useState } from 'react';
import LogoB from '../assets/img/Logo_black.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

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
        <h1 className="text-xl font-medium mb-2">Login as a Captain</h1>
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
          Join a fleet?{' '}
          <Link
            to="/captain-signup"
            className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg ">
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
