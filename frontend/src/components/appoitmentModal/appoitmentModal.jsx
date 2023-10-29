import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import bookappointmentImg from '../../assets/images/bookAppointment.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 610,
  bgcolor: 'background.paper',
  border: '1.4px solid #301F02',
  boxShadow: 35,
  borderRadius:3,
};

export default function BasicModal({handleOpen,open,handleClose}) {

  const [formData, setFormData] = React.useState({
    email: localStorage.getItem('email'),
    healthConditions:'',
    date: '',
    time:'',
    gender: '',
    status: false
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Correct spelling
    console.log(formData);
    axios.post('http://localhost:5000/api/registerAppoitment/zm@gmail.com', formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.status == 200) {
          alert('Appointment booked successfully!');
          setTimeout(() => {
            // Delay the redirection to allow Snackbar to be displayed
            window.location.href = "/";
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <section className='px-5 xl:px-0'>
        <div className="max-w-[1170px] mt-[-50px]">
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="rounded-l-lg lg:pl-16">
              <h3 className='text-headingColor text-[25px] font-bold mb-10'>book an <span className='text-primaryColor'>appointment!</span></h3>
              <form onSubmit={submitHandler}>
                <label className='text-headingColor font-bold text-[16px] leading-7'>Enter the date</label>
                <div className="mb-7">
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} className='w-full pr-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required />
                </div>
                <label className='text-headingColor font-bold text-[16px] leading-7'>Enter the preferable time</label>
                <div className="mb-5">
                  <input type="time" name="time" value={formData.time} onChange={handleInputChange} className='w-full pr-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required />
                </div>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                    Previous health conditons (if any):
                    <select name="healthConditions" id="" value={formData.healthConditions} onChange={handleInputChange} className='text-textColor font-semibold text-[17px] leading-7 px-4 py-3 focus:outline-none appearance-none'>
                      <option value="">None</option>
                      <option value="diabetes">Diabetes</option>
                      <option value="heartDisease">Heart disease</option>
                      <option value="asthma">Asthma</option>
                      <option value="STD">STDs</option>
                      <option value="influenza">Influenza</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                <div className='mb-5 flex items-center justify-between'>
                
                  <label className='text-headingColor font-bold text-[16px] leading-7'>
                    Gender:
                    <select name="gender" id="" value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none appearance-none'>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className='mt-7'>
                  <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Book the appointment</button>
                </div>

              </form>
            </div>
            <div className='hidden lg:block bg-primaryColor rounded-l-lg bg-white  h-[95%]'>
                <img src={bookappointmentImg} alt="" className='h-full w-full rounded-l-lg ' />
            </div>
          </div>
        </div>
      </section>
        </Box>
      </Modal>
    </div>
  );
}
