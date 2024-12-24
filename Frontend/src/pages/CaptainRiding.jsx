import React, { useRef, useState } from 'react';
import LogoB from '../assets/img/Logo_black.png';
import mapsImg from '../assets/img/maps.gif';
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(0)',
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(100%)',
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
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
      <div className="h-[80%]">
        <img
          className="h-full w-full object-cover"
          src={mapsImg}
          alt="MapImage"
        />
      </div>
      <div className="flex relative items-center justify-between h-[20%] bg-[#dfa812] p-4">
        <h5
          className="p-1 text-center left-0 absolute top-0 w-full"
          onClick={() => {}}>
          <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className="bg-[#b41034] text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <FinishRide />
      </div>
    </div>
  );
};

export default CaptainRiding;
