import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
// import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <main className=''>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={"CONATCT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          className='w-full md:max-w-[580px]'
          src={assets.Contact}
          alt='contact image'
        />

        <div className='flex flex-col justify-between items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            E-Com,<br /> 
            No. 27, 2nd Floor, VKK Menon Road,<br /> 
            New Sidhapudur, Gandhipuram,<br /> 
            Coimbatore – 641044,<br /> 
            Tamil Nadu, India.<br /> 
          </p>
          <p className='text-gray-600'>
            Tel: 9772845878 <br /> Email: E-Com@gmail.com
          </p>
          <br/>
          <br/>
          <p></p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
