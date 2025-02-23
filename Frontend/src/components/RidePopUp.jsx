import React from 'react';
import car from '../assets/img/car.png';

const RidePopUp = props => {
  return (
    <div>
      <div>
        <h5
          className="p-1 text-center left-0 absolute top-0 w-full"
          onClick={() => {
            props.setRidePopupPanel(false);
          }}>
          <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
          Want to Accept this User
        </h3>
        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <h2 className="text-xl font-semibold">Prince Bhatt</h2>
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
          <div className="flex items-center justify-between w-full gap-4">
            <button
              onClick={() => {
                props.setRidePopupPanel(false);
              }}
              className="bg-[#d5622d] font-semibold mt-5 text-white p-2 rounded-lg w-1/2">
              Ignore
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(true);
              }}
              className="bg-[#10b461] font-semibold mt-5 text-white p-2 rounded-lg w-1/2">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
