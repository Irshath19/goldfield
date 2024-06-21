import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App.jsx';
import engagement from '../assets/img3.jpg';

const AdminLogin = () => {
  const { updateUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5174/adminlogin', {
        email,
        password,
      });

      const data = response.data;

      if (data.status) {
        setLoggedIn(true);
        alert('Login successful!');
        updateUser(data.email);
        navigate('/payment-history');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div
      className='login flex justify-center items-center min-h-screen bg-cover'
      style={{
        backgroundImage: `url(${engagement})`,
      }}
    >
      <div className='w-full max-w-md p-5 rounded bg-white bg-opacity-75'>
        {loggedIn ? (
          <p className='text-center text-lg text-green-500'>You are logged in.</p>
        ) : (
          <form className='space-y-4'>
            <h3 className='text-2xl font-bold mb-4'>Sign In</h3>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
                Email
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='form-input w-full mt-1'
                />
              </label>
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
                Password
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  className='form-input w-full mt-1'
                />
              </label>
            </div>
            <div className='grid'>
              <button
                type='button'
                onClick={handleLogin}
                className='btn-primary bg-brandPrimary w-full'
              >
                Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { UserContext } from '../App.jsx';
// import engagement from '../assets/img3.jpg';
// const AdminLogin = () => {
//   const { updateUser } = useContext(UserContext);
//   const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5174/adminlogin', {
//         email,
//         password,
//       });

//       const data = response.data;

//       if (data.status) {
//         setLoggedIn(true);
//         alert('Login successful!');
//         updateUser(data.email);
//         navigate('/');
//       } else {
//         alert('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div
//       className='login flex justify-center items-center min-h-screen bg-cover'
//       style={{
//         backgroundImage: `url(${engagement})`,
//       }}
//     >
//       <div className='w-full max-w-md p-5 rounded bg-white bg-opacity-75'>
//         {loggedIn ? (
//           <p className='text-center text-lg text-green-500'>You are logged in.</p>
//         ) : (
//           <form className='space-y-4'>
//             <h3 className='text-2xl font-bold mb-4'>Sign In</h3>
//             <div className='mb-4'>
//               <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
//                 Email
//                 <input
//                   type='text'
//                   value={email}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder='Enter your email'
//                   className='form-input w-full mt-1'
//                 />
//               </label>
//             </div>
//             <div className='mb-4'>
//               <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
//                 Password
//                 <input
//                   type='password'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder='Enter your password'
//                   className='form-input w-full mt-1'
//                 />
//               </label>
//             </div>
//             <div className='mb-4 flex items-center'>
//               <input type='checkbox' id='check' className='form-checkbox' />
//               <label htmlFor='check' className='ml-2 text-sm text-gray-600'>
//                 Remember me
//               </label>
//             </div>
//             <div className='grid'>
//               <button
//                 type='button'
//                 onClick={handleLogin}
//                 className='btn-primary bg-brandPrimary w-full'
//               >
//                 Sign In
//               </button>
//             </div>
//             <p className='text-right mt-4'>
//           Forgot <a href='#'>Password</a> | <a href='/signup'><b>Sign up</b></a>
//              </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

