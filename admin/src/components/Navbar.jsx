import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <header className='flex py-2 px-[4%] justify-between'>
      <img className='w-[max(8%,10px)]' src={assets.ECom_logo} alt='logo' />
      <button onClick={() => setToken("")}
        className='bg-gray-600 text-white px-1 py-1 sm:px-5 sm:py-6 rounded-full'
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
