import React from 'react';

const LocationSearchPanel = props => {
  // sample array for Location
  const locations = [
    "24B, near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
    '22A, near Chai Head Quater, Sheriyans Coding School, Bhopal',
    '202D, near Halua, Sheriyans Coding School, Bhopal',
    '18A, near Virat Kohli Area, Sheriyans Coding School, Bhopal',
    '69B, near Red Light Area, Sheriyans Coding School, Bhopal',
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-10 w-14 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
