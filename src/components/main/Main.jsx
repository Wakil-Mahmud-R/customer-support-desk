import React from 'react';

import vector1 from '../../assets/vector1.png';


const Main = () => {
    return (
<div className="w-11/12 mx-auto border-2 border-red-500">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
    <div
      className="border-2 border-red-500 relative card rounded-lg shadow-lg text-center text-white p-6 overflow-hidden"
      style={{
        background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
      }}
    >
      <img
        src={vector1}
        className="border-2 border-red-500 absolute left-0 top-0 h-full opacity-70"
      />
      <img
        src={vector1}
        className="border-2 border-red-500 absolute right-0 top-0 h-full opacity-70 scale-x-[-1]"
      />
      <div className="border-2 border-red-500 relative card-body items-center justify-center">
        <h2 className="text-lg font-medium">In-Progress</h2>
        <p className="text-4xl font-bold">0</p>
      </div>
    </div>

    <div
      className="border-2 border-red-500  relative card rounded-lg shadow-lg text-center text-white p-6 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #54CF68 9.6%, #00827A 92.23%)",
      }}
    >
      <img
        src={vector1}
        className="border-2 border-red-500  absolute left-0 top-0 h-full opacity-70"
      />
      <img
        src={vector1}
        className="border-2 border-red-500 absolute right-0 top-0 h-full opacity-70 scale-x-[-1]"
      />
      <div className="border-2 border-red-500  relative card-body items-center justify-center">
        <h2 className="text-lg font-medium">Resolved</h2>
        <p className="text-4xl font-bold">0</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Main;