import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App.jsx';
import engagement from '../assets/img3.jpg';
const Login = () => {
  const { updateUser, setCurrUser } = useContext(UserContext);
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5174/login', {
        email,
        password,
      });

      const data = response.data;
      console.log(data);
      if (data.status) {
        const user = {firstName: data.firstName, email : data.email}
        setCurrUser(user);
        setLoggedIn(true);
        alert('Login successful!');
        updateUser(data.email);
        navigate('/');
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
                  onChange={(e) => setUsername(e.target.value)}
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
            <div className='mb-4 flex items-center'>
              <input type='checkbox' id='check' className='form-checkbox' />
              <label htmlFor='check' className='ml-2 text-sm text-gray-600'>
                Remember me
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
            <p className='text-right mt-4'>
          Forgot <a href='#'>Password</a> | <a href='/signup'><b>Sign up</b></a>
             </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { UserContext } from '../App.jsx';

// const Login = () => {
//   const { updateUser } = useContext(UserContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/login', {
//         username,
//         password,
//       });

//       const data = response.data;

//       if (data.status) {
//         setLoggedIn(true);
//         alert('Login successful!');
//         updateUser(data.username);
//         navigate('/'); // Redirect to the homepage
//       } else {
//         alert('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="login flex justify-center items-center w-screen h-screen bg-cover" style={{backgroundImage: "url(your-image-url.jpg)"}}>
//       <div className="w-full max-w-md p-8 rounded bg-white bg-opacity-75">
//         {loggedIn ? (
//           <p className="text-center text-lg text-green-500">You are logged in.</p>
//         ) : (
//           <form className="space-y-4">
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="form-input w-full mt-1"
//               />
//             </label>
//             <label className="block text-sm font-medium text-gray-600">
//               Password
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-input w-full mt-1"
//               />
//             </label>
//             <button
//               type="button"
//               onClick={handleLogin}
//               className="btn-primary bg-brandPrimary w-full"
//             >
//               Log In
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React from 'react';
// import engagement from '../assets/img3.jpg';
// const Login = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${engagement})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };

//   return (
//     <div className='login flex justify-center items-center w-screen h-screen' style={backgroundStyle}>
//       <div className='w-96 p-8 rounded bg-white bg-opacity-75'>
//         <form>
//           <h3 className='text-2xl font-bold mb-4'>Log In</h3>
//           <div className='mb-4'>
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
//           <div className='mb-4 flex items-center'>
//             <input type='checkbox' id='check' className='form-checkbox' />
//             <label htmlFor='check' className='ml-2 text-sm text-gray-600'>
//               Remember me
//             </label>
//           </div>
//           <div className='grid'>
//             <button className='btn-primary bg-brandPrimary'>Log In</button>
//           </div>
//           <p className='text-right mt-4'>
//             Forgot <a href='#'>Password</a> | <a href='/signup'><b>Sign up</b></a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
