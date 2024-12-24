import React from 'react';
import car from '../assets/img/car.png';
import mapsImg from '../assets/img/maps.gif';
import { Link } from 'react-router-dom';
import LogoB from '../assets/img/Logo_black.png';

const CaptainDetails = () => {
  return (
    <div>
      <div className="w-full h-20 rounded flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={car}
            alt=""
          />
          <h4 className="text-lg font-bold">Yash Rajput</h4>
        </div>
        <div>
          <h4 className="text-xl text-right font-bold">₹193</h4>
          <p className="text-sm font-semibold text-right p-2 text-gray-500">
            Earned
          </p>
        </div>
      </div>
      <div className="bg-[#f1da53] rounded-md mt-4 p-4 flex items-center justify-center gap-7">
        <div className="text-center">
          <i className="text-2xl font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">69</h5>
          <p className="text-sm text-gray-600">Kilo meter Driven</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">6</h5>
          <p className="text-sm text-gray-600">passenger</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
