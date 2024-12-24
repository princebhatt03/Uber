import React from 'react';
import car from '../assets/img/car.png';

const WaitingForDriver = props => {
  return (
    <div>
      <h5
        className="p-1 text-center left-0 absolute top-0 w-full"
        onClick={() => {
          props.waitingForDriver(false);
        }}>
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
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
        {/* <button className="bg-green-600 mt-5 text-white font-semibold p-2 rounded-lg w-full">
              Confirm
            </button> */}
      </div>
    </div>
  );
};

export default WaitingForDriver;
