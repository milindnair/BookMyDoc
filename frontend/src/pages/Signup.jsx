import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import avatar from "../assets/images/doctor-img01.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    photo: selectedFile,
    name: '',
    gender: '',
    role: 'doctor',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    // setSelectedFile(e.target.files[0]);
    // setPreviewURL(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);

      console.log(response.data);
      if (response.data.status == 200) {
        localStorage.setItem
        setOpenSnackbar(true);
        console.log('Registration successful! Redirecting to doctors page...');
        alert('Registration successful! Redirecting to doctors page...');
        setTimeout(() => {
          // Delay the redirection to allow Snackbar to be displayed
          window.location.href = "/doctors";
        }, 1000);
      }

    } catch (error) {
      console.error('Error registering doctor:', error.response.data);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <section className='px-5 xl:px-0'>
        <div className="max-w-[1170px] mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
              <figure className='rounded-l-lg'>
                <img src={signupImg} alt="" className='w-full rounded-l-lg' />
              </figure>
            </div>
            <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-primaryColor'>account</span></h3>
              <form onSubmit={submitHandler}>
                <div className="mb-5">
                  <input type="text" placeholder='Enter your Full Name' name="name" value={formData.name} onChange={handleInputChange} className='w-full pr-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder='Enter your Email' name="email" value={formData.email} onChange={handleInputChange} className='w-full pr-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required />
                </div>
                <div className="mb-5">
                  <input type="password" placeholder='Enter your Password' name="password" value={formData.password} onChange={handleInputChange} className='w-full pr-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required />
                </div>

                <div className='mb-5 flex items-center justify-between'>
                  <label className='text-headingColor font-bold text-[16px] leading-7'>
                    Are you a:
                    <select
                      name="role"
                      id=""
                      value={formData.role}
                      onChange={handleInputChange}
                      className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none appearance-none'
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>

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

                <div className='mb-5 flex items-center gap-3'>
                  <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                    <img src={avatar} alt="" className='w-full rounded-full ' />
                  </figure>

                  <div className='relative w-[130px] h-[50px]'>
                    <input type="file" onChange={handleFileInputChange} name="photo" id="customFile" accept='.jpg,.png' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                    <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer  '>Upload Photo</label>
                  </div>
                </div>
                <div className='mt-7'>
                  <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Sign Up</button>
                </div>

                <p className='mt-5 text-textColor text-center'>Alread have an account? <Link to="/login" className='text-primaryColor font-medium ml-1'>Login</Link></p>

              </form>
            </div>
          </div>
        </div>
      </section>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} zIndex={9999}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Registration successful! Redirecting to doctors page...
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Signup