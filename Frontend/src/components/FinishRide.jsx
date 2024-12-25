import React from 'react';
import { Link } from 'react-router-dom';
import vv from '../assets/img/vv.jpg';

const FinishRide = props => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}>
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Complete this Ride</h3>
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
          <Link
            to="/captain-home"
            className="bg-[#10b461] flex items-center justify-center text-center font-semibold mt-3 text-white p-2 rounded-lg w-full">
            Finish Ride
          </Link>
        </div>
        <p className="text-red-600 mt-2 text-sm">
          Click on Finish Ride if you Completed the Payment
        </p>
      </div>
    </div>
  );
};

export default FinishRide;
