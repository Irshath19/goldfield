import React, { useState } from 'react';
import axios from 'axios';
import engagement from '../assets/img3.jpg';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate=useNavigate();
  const handleClick = () =>{
    navigate('/login');
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const backgroundStyle = {
    backgroundImage: `url(${engagement})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5174/signup', formData);
      const data = response.data;
      if (data.status) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='register flex justify-center items-center w-screen h-screen' style={backgroundStyle}>
      <div className='w-96 p-8 rounded bg-white bg-opacity-75 mt-36'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-2xl font-bold mb-2'>Register</h3>
          <div className='mb-4'>
            <label htmlFor='firstName' className='block text-sm font-medium text-gray-600'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              placeholder='Enter your first name'
              className='form-input w-full mt-1'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='lastName' className='block text-sm font-medium text-gray-600'>
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              placeholder='Enter your last name'
              className='form-input w-full mt-1'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              className='form-input w-full mt-1'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              className='form-input w-full mt-1'
              onChange={handleChange}
              required
            />
          </div>
          <div className='grid'>
            <button type='submit' className='btn-primary bg-brandPrimary' onClick={handleSubmit && handleClick}> 
              Register
            </button>
          </div>
          <p className='text-right mt-4'>
            Already have an account? <a href='/login'><b>Sign in</b></a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;


// import React from 'react';
// import engagement from '../assets/img3.jpg';

// const Register = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${engagement})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };

//   return (
//     <div className='register flex justify-center items-center w-screen h-screen' style={backgroundStyle}>
//       <div className='w-96 p-8 rounded bg-white bg-opacity-75 mt-36'>
//         <form>
//           <h3 className='text-2xl font-bold mb-2'>Register</h3>
//           <div className='mb-4'>
//             <label htmlFor='firstName' className='block text-sm font-medium text-gray-600'>
//               First Name
//             </label>
//             <input
//               type='text'
//               id='firstName'
//               placeholder='Enter your first name'
//               className='form-input w-full mt-1'
//             />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='lastName' className='block text-sm font-medium text-gray-600'>
//               Last Name
//             </label>
//             <input
//               type='text'
//               id='lastName'
//               placeholder='Enter your last name'
//               className='form-input w-full mt-1'
//             />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
//               Email
//             </label>
//             <input
//               type='email'
//               id='email'
//               placeholder='Enter your email'
//               className='form-input w-full mt-1'
//             />
//           </div>
//           <div className='mb-4'>
//             <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
//               Password
//             </label>
//             <input
//               type='password'
//               id='password'
//               placeholder='Enter your password'
//               className='form-input w-full mt-1'
//             />
//           </div>
//           <div className='grid'>
//             <button className='btn-primary bg-brandPrimary'>Register</button>
//           </div>
//           <p className='text-right mt-4'>
//             Already have an account? <a href='/login'><b>Sign in</b></a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
