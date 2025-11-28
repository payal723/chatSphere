import React from "react";
import { Link } from "react-router-dom";   

const Landing = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/media/zoom.jpg')" }}
    >      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-20 flex justify-between items-center px-12 py-6">
        <h1 className="text-[#A855F7] font-bold text-2xl px-3 py-1 rounded-md ">
          ChatSphere
        </h1>

        <div className="flex gap-4 items-center">
          {/* <button className="text-white hover:text-orange-400">
            Join as Guest
          </button> */}
          <button className="text-white hover:text-orange-400">
          <Link to='/auth'>Register</Link>  
          </button>
          <Link
            to="/auth"
            className="bg-red-600 hover:bg-red-700 transition-all px-6 py-3 rounded-lg text-white font-semibold w-fit"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex h-[calc(100%-80px)] px-12">
        <div className="w-1/2 flex flex-col justify-center text-white">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Connect</span> with your
          </h2>
          <h3 className="text-5xl font-bold mb-4">Loved Ones</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Cover a distance by <span className="text-[#A855F7] text-2xl">ChatSphere</span>
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md w-fit font-semibold">
          <Link to='/auth'>  Get Started</Link>
          </button>
        </div>

        <div className="w-1/2 flex justify-center items-center gap-8">
          <img
            src="/media/zoom1.jpg"
            alt="Video Call 1"
            className="w-52 md:w-64 rotate-[-10deg] rounded-2xl shadow-xl"
          />
          <img
            src="/media/zoom2.jpg"
            alt="Video Call 2"
            className="w-52 md:w-64 rotate-[10deg] rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
