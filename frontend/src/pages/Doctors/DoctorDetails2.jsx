import React, { useState } from 'react';
import doctorImg from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails2 = () => {
  const [tab, settab] = useState('about');

  const doctorData = {
    name: "Dr. Zaidali Merchant",
    specialty: "Cardiologist",
    rating: 4.8,
    reviews: 272,
    description: "Dr. Zaidali Merchant is a highly experienced cardiologist with a passion for improving heart health. With over 10 years of practice, Dr. Merchant has helped numerous patients achieve better cardiac wellness. He is dedicated to providing personalized care to his patients and is known for his expertise in treating a wide range of heart conditions."
  };

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 ">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} alt={doctorData.name} className='w-full' />
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-2 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>{doctorData.specialty}</span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>{doctorData.name}</h3>
                <div className="flex items-center gap-[6px]">
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt="Star Icon" />{doctorData.rating}
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({doctorData.reviews})</span>
                </div>
                <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                  {doctorData.description}
                </p>
              </div>
            </div>
            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('about') }}>About</button>
              <button className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('feedback') }}>Feedback</button>
            </div>
            <div className='mt-[50px]'>
              {
                tab === 'about' && <DoctorAbout />
              }
              {
                tab === 'feedback' && <Feedback />
              }
            </div>
          </div>
          <SidePanel />
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails2;
