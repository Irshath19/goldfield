import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../App';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const currentUser = useUser();

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5174/payment-history");
      const data = response.data;
      console.log(data);
      setPaymentHistory(data);
    } catch (error) {
      console.error('Error fetching payment history:', error);
    }
  };

  return (
    <div className="container mx-auto mt-40">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      {/* <p>Current User: {currentUser.user}</p> */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User Email</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment._id}>
              <td className="py-2 px-4 border-b">{payment.email}</td>
              <td className="py-2 px-4 border-b">{payment.amount}</td>
              <td className="py-2 px-4 border-b">{new Date(payment.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PaymentHistory = () => {
//   const [paymentHistory, setPaymentHistory] = useState([]);

//   useEffect(() => {
//     fetchPaymentHistory();
//   }, []);

//   const fetchPaymentHistory = async () => {
//     try {
//       const response = await axios.get("http://localhost:5174/payment-history");
//       const data = response.data;
//       setPaymentHistory(data);
//     } catch (error) {
//       console.error('Error fetching payment history:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-40">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel - Payment History</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Amount</th>
//             <th className="py-2 px-4 border-b">Timestamp</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paymentHistory.map((payment) => (
//             <tr key={payment._id}>
//               <td className="py-2 px-4 border-b">{payment.amount}</td>
//               <td className="py-2 px-4 border-b">{new Date(payment.timestamp).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PaymentHistory;