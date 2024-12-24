import React from 'react';
import mapsImg from '../assets/img/maps.gif';
import { Link } from 'react-router-dom';
import LogoB from '../assets/img/Logo_black.png';
import car from '../assets/img/car.png';
import CaptainDetails from '../components/CaptainDetails';

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="w-screen flex items-center justify-between">
        <img
          className="w-16 absolute top-2"
          src={LogoB}
          alt="LogoImage"
        />
        <Link
          to="/captain-login"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-[60%]">
        <img
          className="h-full w-full object-cover"
          src={mapsImg}
          alt="MapImage"
        />
      </div>
      <div className="h-[40%] p-4">
        <CaptainDetails />
      </div>
    </div>
  );
};

export default CaptainHome;
