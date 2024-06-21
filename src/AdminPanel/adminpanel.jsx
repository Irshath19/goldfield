import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactlistview');
  };

  const handlePaymentClick = () => {
    navigate('/payment-history');
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded shadow-md cursor-pointer" onClick={handleContactClick}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>{'->'}</p>
            {/* Content related to Contact Us */}
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md cursor-pointer" onClick={handlePaymentClick}>
            <h3 className="text-xl font-bold mb-4">Payment History</h3>
            <p>{'->'}</p>
            {/* Content related to Payment History */}
          </div>
        </div>
      </div>    
    </div>
  );
};

export default AdminPanel;
