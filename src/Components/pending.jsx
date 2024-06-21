import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Payment from './Payment';

const Pending = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [userData, setUserData] = useState([]);
  const { currUser } = useContext(UserContext);

  const handlePaymentSuccess = (response) => {
    navigate('/payment');
  };

  const handleClick = () => {
    setShowPayment(true);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5174/payment-history');
        const data = response.data.filter((data) => data.email === currUser.email);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [currUser.email]);

  return (
    <div className="container mx-auto mt-40">
      <h1 className="text-2xl font-bold mb-4">Pending Payments</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Pending Amount</th>
            <th className="py-2 px-4 border-b">TIME</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.amount > 0 ? user.amount : 'Fully Paid'}</td>
              <td className="py-2 px-4 border-b">{new Date(user.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-20'>
        <button
          className='bg-brandPrimary text-white py-2 px-4 rounded'
          onClick={handleClick}
        >
          Pay balance
        </button>
      </div>
      <div className='mb-10'>
            
      </div>

      {showPayment && <Payment onSuccess={handlePaymentSuccess} />}
    </div>
  );
};

export default Pending;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useContext } from 'react';
// import { UserContext } from '../App';
// import { useNavigate } from 'react-router-dom';

// const Pending = () => {

//   const navigate = useNavigate();
//   const [showPayment, setShowPayment] = useState(false);
//   const handlePaymentSuccess = (response) => {
//     navigate('/payment');
//   };

//   const handleClick = () => {
//     setShowPayment(true);
//      navigate('/payment');
//   };

//   const [userData, setUserData] = useState([]);
//   const {currUser} = useContext(UserContext);
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5174/payment-history');
//         const data = response.data.filter((data) => data.email === currUser.email)
//         setUserData(data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);
//   return (
//     <div className="container mx-auto mt-40">
//       <h1 className="text-2xl font-bold mb-4">Pending Payments</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">User</th>
//             <th className="py-2 px-4 border-b">Pending Amount</th>
//             <th className="py-2 px-4 border-b">TIME</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((user, index) => (
//             <tr key={index}>
//               <td className="py-2 px-4 border-b">{user.email}</td>
//               <td className="py-2 px-4 border-b">{user.amount > 0 ? user.amount : 'Fully Paid'}</td>
//               {/* <td className="py-2 px-4 border-b">{user.timestamp}</td> */}
//               <td className="py-2 px-4 border-b">{new Date(user.timestamp).toLocaleString()}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='mt-20'>
//   <button className='btn-primary' 
//   onClick={handleClick}

//   >Pay balance</button>
// </div>

//     </div>
//   );
// };

// export default Pending;