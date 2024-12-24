import React from 'react';
import car from '../assets/img/car.png';

const ConfirmRide = props => {
  return (
    <div>
      <h5
        className="p-1 text-center left-0 absolute top-0 w-full"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}>
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confrim your ride</h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        <img
          className="h-20"
          src={car}
          alt="Car Image"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">171/12</h3>
              <p className="text-sm text-gray-600 ">Arihant Vihar, Vidisha</p>
            </div>
          </div>
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
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="bg-green-600 mt-5 text-white font-semibold p-2 rounded-lg w-full">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
