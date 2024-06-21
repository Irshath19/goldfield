import React, { useContext } from 'react';
import { UserContext } from '../App';
const Payment = () => {
    const {currUser} = useContext(UserContext);
    
    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch("http://localhost:5174/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: 1000,
                    email: currUser.email

                })
            });

            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }

            // const contentType = response.headers.get("content-type");

            // if (contentType && contentType.includes("application/json")) {
            //     let orderData = await response.json();
              let orderData=await response.json();
              console.log(orderData);
                var options = {
                    "key": "rzp_test_lecUDaCPM6P4FT",
                    "amount": 1000*100,
                    "currency": "INR",
                    // "order_id": orderData.order.id,
                    // handler: function (response) {
                    //     alert(response.razorpay_payment_id);
                    //     alert(response.razorpay_order_id);
                    //     alert(response.razorpay_signature);
                    // }
                };

                var rzp1 = new Razorpay(options);
                rzp1.open();
            // } else {
            //     throw new Error("Response is not in JSON format");
            // }
        } catch (error) {
            console.error("Error in payment:", error);
        }
    };

    return (
        <div>
            <button className='btn-primary' onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;


// import React from 'react';
// const Payment = () => {
//   const handlePayment = async (e) => {
//     e.preventDefault();
//     try {
//       // let response = await fetch("/payment", {
//         let response = await fetch("http://localhost:5174/payment", {
//         method: "POST",
//         headers: {
//           "content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           amount: 500,
//         })
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const contentType = response.headers.get("content-type");
//       if (contentType && contentType.includes("application/json")) {
//         let orderData = await response.json();
  
//         var options = {
//           "key": "rzp_test_lecUDaCPM6P4FT",
//           "amount": "50000",
//           "currency": "INR",
//           "method":"upi",
//           "order_id": orderData.id,
//           handler: function (response) {
//             alert(response.razorpay_payment_id);
//             alert(response.razorpay_order_id);
//             alert(response.razorpay_signature);
//           }
//         };
//         var rzp1 = new Razorpay(options);
//         rzp1.open();
//       } else {
//         throw new Error("Response is not in JSON format");
//       }
//     } catch (error) {
//       console.error("Error in payment:", error);
//     }
//   };
//   return (
//     <div>
//       {/* <button id="rzp-button1" onClick={handlePayment}>
//         Pay Now
//       </button> */}
//        <button className='btn-primary' onClick={handlePayment}>Pay Now</button>

//     </div>
//   );
// };
// export default Payment;
