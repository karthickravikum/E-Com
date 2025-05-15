import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <main>
      <div className='text-2xl text-center mt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px]'
          src={assets.About}
          alt='about image'
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            {" "}
            Welcome to E-Com, your ultimate destination for stylish, high-quality dresses that celebrate every personality and occasion. We’re passionate about fashion and committed to bringing you the latest trends, timeless classics, and unique designs – all in one place.
          </p>
          <p>
            {" "}
            Founded with the belief that everyone deserves to feel confident and beautiful, we curate each piece with care and attention to detail. From casual wear to party dresses, our collection is designed to suit every style, mood, and moment.
          </p>
          <p>
            {" "}
            At E-Com, we value quality, comfort, and affordability. Whether you're dressing up for a special event or looking for everyday elegance, we have something perfect just for you.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            To empower individuals through fashion by offering a diverse range of stylish dresses that combine quality, comfort, and affordability. We strive to make fashion accessible to everyone, everywhere.
          </p>
        </div>

        </div>
        
        <div className='text-4xl py-4'>
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p>
              We handpick each fabric and work with skilled designers to ensure every dress meets our high-quality standards. Durability, comfort, and perfect fit are at the heart of our products.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p>
              From casual to couture, find the right dress in just a few clicks. Our user-friendly platform makes online shopping easy, fast, and enjoyable.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p>
              Our friendly support team is always ready to help you with queries, size guidance, and order support – ensuring a smooth and satisfying shopping experience.
            </p>
          </div>

       
      </div>
    </main>
  );
};

export default About;
