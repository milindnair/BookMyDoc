import { Box, Typography } from '@mui/material'
import React, { useState } from 'react';
import BasicModal from '../../components/appoitmentModal/appoitmentModal';

const SidePanel = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md lg:h-[40vh]  '>
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Ticket Price</p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    $ 100
                </span>

            </div>
            <div className='mt-[30px]'>
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30PM</p>

                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30PM</p>

                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Wednesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30PM</p>

                    </li>
                </ul>
            </div>
            <button className="btn px-2 w-full rounded-md" onClick={handleOpen}  >Book Appointment</button>
            <BasicModal  handleOpen={handleOpen} open={open} handleClose={handleClose}/>
        </div>

    )
}

export default SidePanel