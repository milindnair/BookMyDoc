import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      console.log(response.data.data);
      if (response.data.status == 200) {
        // setOpenSnackbar(true);
        console.log('Registration successful! Redirecting to doctors page...');
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('email', response.data.data.email);
        if (response.data.data.role == 'doctor') {
          localStorage.setItem('booking', response.data.data.booking);
          localStorage.setItem('role', 'doctor');
          setTimeout(() => {
            // Delay the redirection to allow Snackbar to be displayed
            window.location.href = "/doctordashboard";
          }, 1000);
        }
        else{
          localStorage.setItem('role', 'patient');
          setTimeout(() => {
            // Delay the redirection to allow Snackbar to be displayed
            window.location.href = "/";
          }, 1000);
        }
        alert('Registration successful! Redirecting to doctors page...');
        
      }

    } catch (error) {
      console.error('Error registering doctor:', error);
    }
  };


  return (
    <section className='px-5 lg:px-8'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hello <span  className='text-primaryColor'>Welcome</span>Back 🎉</h3>
        <form action="" className='py-4 md:py-0'>
          <div className="mb-5">
            <input type="email" placeholder='Enter your Email' name="email" value={formData.email} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required/>
          </div>
          <div className="mb-5">
            <input type="password" placeholder='Enter your Password' name="password" value={formData.password} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required/>
          </div>

          <div className='mt-7'>
            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3' onClick={submitHandler}>Login</button>
          </div>

          <p className='mt-5 text-textColor text-center'>Don't have an account? <Link to="/register" className='text-primaryColor font-medium ml-1'>Register</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login