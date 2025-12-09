import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/50/6d/0f/506d0f6f4e79eb83eaa907129e62d043.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <header className="relative z-20 flex justify-between items-center px-6 py-6 md:px-12">
        <h1 className="text-[#A855F7] font-bold text-2xl px-3 py-1 rounded-md">
          ChatSphere
        </h1>

        <Link
          to="/auth"
          className="bg-red-600 hover:bg-red-700 transition-all px-4 py-2 md:px-6 md:py-3 rounded-lg text-white font-semibold text-sm md:text-base"
        >
          Login
        </Link>
      </header>

      {/* <section className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 pt-10 pb-16 lg:py-0 lg:h-[calc(100%-80px)] gap-12 lg:gap-0">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-orange-500">Connect</span> with your
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Loved Ones</h3>

          <p className="text-gray-300 mb-6 text-lg">
            Cover a distance by{" "}
            <span className="text-[#A855F7] text-2xl">ChatSphere</span>
          </p>

          <Link
            to="/auth"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Get Started
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://i.pinimg.com/736x/d1/ce/c5/d1cec57c81ad8ab7a19d68b9772e60ca.jpg"
            alt="Video Call"
            className="w-48 sm:w-60 md:w-64 lg:w-72 rounded-2xl shadow-xl"
          />
        </div>
      </section> */}
      <section
  className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 pt-10 pb-16 lg:py-0 lg:h-[calc(100%-80px)] gap-12 lg:gap-0"
>
  {/* left text */}
  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-3">
      <span className="text-orange-500">Connect</span> with your
    </h2>
    <h3 className="text-4xl md:text-5xl font-bold mb-4">Loved Ones</h3>

    <p className="text-gray-300 mb-6 text-lg">
      Cover a distance by{" "}
      <span className="text-[#A855F7] text-2xl">ChatSphere</span>
    </p>

    <Link
      to="/auth"
      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
    >
      Get Started
    </Link>
  </div>

  {/* right visual – new bg-matched image */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <div className="relative w-48 sm:w-60 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl">
      {/* subtle gradient to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <img
        src="https://i.pinimg.com/736x/1c/79/08/1c7908558527310e244e15cecd0550d4.jpg"
        alt="Video Call"
        className="w-full h-full object-cover"
        style={{ filter: "saturate(0.9) brightness(0.85) contrast(1.05)" }}
      />
    </div>
  </div>
</section>
    </div>
  );
};

export default Landing;