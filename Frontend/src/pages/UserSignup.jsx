import React, { useState } from 'react';
import LogoB from '../assets/img/Logo_black.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async e => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setFirstName('');
    setLastName('');
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
        <h1 className="text-xl font-medium mb-2">SignUp as a User</h1>
        <form
          onSubmit={e => {
            submitHandler(e);
          }}
          action="">
          <div>
            <h3 className="text-base font-medium mb-2">Enter Your Name</h3>
            <input
              type="text"
              required
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={e => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">Enter Your Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="password"
            required
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg ">
            Create Account
          </button>
        </form>
        <p className="text-center font-semibold">
          Already have Account?{' '}
          <Link
            to="/login"
            className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-signup"
          className="bg-[#10b461] flex items-center justify-center font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg ">
          Signup as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
