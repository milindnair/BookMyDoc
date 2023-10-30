import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'

const DoctorDetails = () => {
  
  const[tab,settab] = useState('about')

  const doctorData = {
    name: "Dr. Bhupendra Jogi",
    specialty: "Surgeon",
    rating: 4.9, // You can set the actual rating
    reviews: 189, // You can set the actual number of reviews
    description: "Dr. Bhupendra Jogi is a renowned surgeon with a strong commitment to heart. With extensive experience in treating various skin conditions, Dr. Lewis is dedicated to providing patients with the best skincare solutions. He is currently practicing at Mount Beta Hospital in Mumbai, where he offers a wide range of dermatological services."
  };

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 ">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} alt="" className='w-full' />
              </figure>


              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-2 px-6 lg:py-2 lg:px-6 text-[12pz] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Karthikeya Mishra</h3>
                <div className="flex items-center gap-[6px]">
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt="" />4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(272)</span>
                </div>
                <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
  Dr. Bhupendra Jogi is a highly accomplished surgeon based in Los Angeles, USA, practicing at Mount Adora Hospital. With a wealth of experience and expertise, he has successfully treated over 1500 patients, earning a reputation as a top-tier surgical specialist. Dr. Jogi is dedicated to providing the best possible care to his patients. He specializes in a wide range of surgical procedures and is known for his precision and commitment to patient well-being. His compassionate approach and remarkable surgical skills make him a trusted choice for those seeking surgical care.
</p>
              </div>
            </div>
            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={()=>{settab('about')}}>About</button>
              <button className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={()=>{settab('feedback')}}>Feedback</button>

            </div>
            <div className='mt-[50px]'>
              {
                tab === 'about' &&  <DoctorAbout doctor={doctorData} />
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
  )
}

export default DoctorDetails