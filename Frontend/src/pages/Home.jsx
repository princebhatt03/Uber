import React, { useRef } from 'react';
import LogoB from '../assets/img/Logo_black.png';
import mapsImg from '../assets/img/maps.gif';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClose = useRef(null);

  const submitHandler = e => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: '70%',
        });
        gsap.to(panelClose.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: '0%',
        });
        gsap.to(panelClose.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src={LogoB}
        alt="LogoImage"
      />
      <div className="h-screen w-screen ">
        {/* Image for Temp Use */}
        <img
          className="h-full w-full object-cover"
          src={mapsImg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelClose}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={e => {
              submitHandler(e);
            }}>
            <div className="line absolute h-16 w-1 top-[44%] rounded-full left-10 bg-gray-900"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={e => {
                setPickup(e.target.value);
              }}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a Pick-up Location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={e => {
                setDestination(e.target.value);
              }}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>
        <div
          ref={panelRef}
          className="bg-red-500 h-0"></div>
      </div>
    </div>
  );
};

export default Home;
