import React from 'react';
import { formatDate } from '../../utils/formatDate';

const DoctorAbout = (props) => {
    const docData = props.doctor;

    const {name} = docData;


    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About <span className='text-irisBlueColor font-bold text-[24px] leading-9'>{name}</span></h3>
                <p className="text__para">{name} is a dedicated and experienced medical professional. He is committed to providing the best healthcare to his patients, with a focus on excellence in surgical procedures and patient care. With a wealth of knowledge and experience, Dr. Jogi is a trusted choice for surgical treatments.</p>
            </div>
            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
                <ul className='pt-4 md:p-5'>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate('12-04-2000')} - {formatDate('12-04-2002')}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgery</p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate('12-04-2010')} - {formatDate('12-04-2012')}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'>MD in Surgery</p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>Mount Adora Hospital, Los Angeles</p>
                    </li>
                </ul>
            </div>
            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formatDate('12-04-2000')} - {formatDate('12-04-2002')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>Mount Adora Hospital, Los Angeles</p>
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formatDate('12-04-2000')} - {formatDate('12-04-2002')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>Mount Adora Hospital, Los Angeles</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DoctorAbout;
