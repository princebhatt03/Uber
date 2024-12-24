import React from 'react';
import car from '../assets/img/car.png';
import mapsImg from '../assets/img/maps.gif';
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src={mapsImg}
          alt="MapImage"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src={car}
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Prince</h2>
            <h4 className="text-xl font-semibold">MP 40 AB 4040</h4>
            <p className="font-sm text-gray-600">Rolls Royce</p>
          </div>
        </div>
        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-xl ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm text-gray-600 ">
                  Tallaiya Moholla, Vidisha
                </p>
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
        </div>
        <button className="bg-[#10b461] mt-5 text-white font-semibold p-2 rounded-lg w-full">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
