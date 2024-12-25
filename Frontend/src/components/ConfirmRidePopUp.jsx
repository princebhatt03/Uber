import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vv from '../assets/img/vv.jpg';

const ConfirmRidePopUp = props => {
  const [opt, setOpt] = useState('');
  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}>
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this User</h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4 ">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full object-cover w-12"
            src={vv}
            alt="User Image"
          />
          <h2 className="text-lg font-semibold">Prince Bhatt</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex items-center justify-between flex-col gap-2">
        <div className="w-full mt-5">
          <h2 className="text-xl font-semibold">Prince Bhatt</h2>
          <div className="flex items-center gap-5 p-1 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">171/12</h3>
              <p className="text-sm text-gray-600 ">Arihant Vihar, Vidisha</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-1 border-b-2">
            <i className="text-xl ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 ">
                Tallaiya Moholla, Vidisha
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-xl ri-route-fill"></i>
            <div>
              <h3 className="text-lg font-medium">2.2 KM</h3>
              <p className="text-sm text-gray-600 ">Distance</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-xl ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193</h3>
              <p className="text-sm text-gray-600 ">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={e => {
              submitHandler(e);
            }}>
            <input
              value={opt}
              onChange={e => setOpt(e.target.value)}
              className="bg-[#eeeeee] text-center px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter OTP"
            />
            <Link
              to={'/captain-riding'}
              className="bg-[#10b461] flex items-center justify-center text-center font-semibold mt-3 text-white p-2 rounded-lg w-full">
              Confirm Ride
            </Link>
            {/* 2nd PopUp */}
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="bg-[#d5622d] font-semibold mt-3 text-white p-2 rounded-lg w-full">
              Cancle Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
