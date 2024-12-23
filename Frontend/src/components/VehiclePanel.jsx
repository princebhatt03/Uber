import React from 'react';
import car from '../assets/img/car.png';
import bike from '../assets/img/bike.png';
import auto from '../assets/img/auto.png';

const VehiclePanel = props => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center left-0 absolute top-0 w-full">
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-12"
          src={car}
          alt="Car PNG"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGO{' '}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-12"
          src={bike}
          alt="Car PNG"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{' '}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">7 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motor cycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹87</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-12"
          src={auto}
          alt="Car PNG"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{' '}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, auto ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹49</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
