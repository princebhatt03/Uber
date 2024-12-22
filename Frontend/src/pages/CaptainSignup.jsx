import React, { useState } from 'react';
import LogoB from '../assets/img/Logo_black.png';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async e => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-4"
          src={LogoB}
          alt=""
        />
        <h1 className="text-xl font-medium mb-2">SignUp as a Captain</h1>
        <form
          onSubmit={e => {
            submitHandler(e);
          }}
          action="">
          <h3 className="text-base font-medium mb-2">Enter Your Name</h3>
          <div className="flex gap-4">
            <input
              type="text"
              required
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={e => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
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
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 flex-wrap mb-7">
            <input
              type="text"
              required
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-sm  placeholder:text-sm"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={e => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-sm  placeholder:text-sm"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={e => {
                setVehiclePlate(e.target.value);
              }}
            />
            <input
              type="number"
              required
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-sm  placeholder:text-sm"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={e => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-sm  placeholder:text-sm"
              value={vehicleType}
              onChange={e => {
                setVehicleType(e.target.value);
              }}>
              <option
                value=""
                disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="Bike">Bike</option>
            </select>
          </div>
          <button className="bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg ">
            Create Captain's Account
          </button>
        </form>
        <p className="text-center font-semibold">
          Already have Account?{' '}
          <Link
            to="/captain-login"
            className="text-blue-600">
            Login as Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#b41034] flex items-center justify-center font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg ">
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
