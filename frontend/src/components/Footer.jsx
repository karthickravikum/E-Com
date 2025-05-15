import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <section className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-2 w-20' src={assets.ECom_logo} alt='logo' />
          <p className='md:w-2/3 text-gray-600'>
            Stay connected with E-Com Clothes for the latest trends, exclusive
            offers, and style inspiration. Follow us on social media and
            subscribe to our newsletter for updates and special promotions.
          </p>
        </div>
        <div>
          <p className='font-medium text-xl mb-5'>QUICK LINKS</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
              <a href='/about' className='hover:text-black'>About Us</a>
            </li>
            <li>
              <a href='/contact' className='hover:text-black'>Contact Us</a>
            </li>
            <li>
            <a href='/collection' className='hover:text-black'>Collections</a>
          </li>
          <li>
            <a href='/orders' className='hover:text-black'>Order</a>
          </li>
          </ul>
        </div>
        <div >
          <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>9798457834</li>
            <li>E-Com@gmail.com</li>
          </ul>
        </div>
      </section>
  
      <div className=''>
        <hr />
        <p className='py-5 text-sm text-center'>
          {" "}
          Copyright 2025  E-Com - All Right Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
