import React from 'react';
import saving from '../Assets/saving.jpg';
import swarna from '../Assets/swarna.png';
import { useNavigate } from 'react-router-dom';

const GoldSchemes = () => {
  const navigate=useNavigate();
      const handleClick = () => {
        navigate('/terms');
      };
  return (
    <div className="gold-schemes-container max-w-1/4 h-1/2 mx-auto text-center font-large mt-20">
      <div className="centered-logo mb-20 mt-150">
        <img src={saving} alt="Logo" className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto h-auto" />
      </div>

      <div className="content-container mb-20 text-gray-800">
  <h2 className="text-4xl font-semibold mb-4">Gold Schemes Page</h2>
  <p className="mb-4">Your Wedding And Special Occasions Jewellery Purchase Is Now More Convenient.</p>
  <p className="mb-4">SAVE MORE with Pothys SwarnaMahal’s Swarna Viruksham!</p>
  <p className="mb-4">A smart, secure and hassle-free ONE-TIME PAYMENT PLAN to buy your Wedding and Special Occasions Jewellery with more benefits in a short period of time.</p>
  <p className="mb-4">Deposit your old gold in this plan to buy the latest wedding jewellery designs.</p>
  <p className="mb-4">Owning your favourite wedding Jewellery is No longer a Dream with Swarna Viruksham one-time advance purchase plan.</p>
</div>


      <div className="image-container mt-20 mb-20">
        <h2 className="text-5xl font-semibold mb-10">GoldField Schemes Benefits</h2>
        <img src={swarna} alt="Swarna" className="w-2/2 mx-auto border-2 border-solid border-gray-300 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>

      <div className="table-container mt-20 overflow-x-auto">
  <h2 className="text-3xl mb-4">GoldField Scheme Details</h2>
  <table className="w-4/4 mx-auto border-collapse border border-solid border-gray-300 mb-10">
    <thead className="bg-gray-200 w-auto">
      <tr>
        <th className="py-2 px-4">Jewellery</th>
        <th className="py-2 px-4">Wastage (VA)</th>
        <th className="py-2 px-4">Making Charges</th>
        <th className="py-2 px-4">Discount Per Carat</th>
        <th className="py-2 px-4">Amount(per month)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-2 px-4">Gold Jewellery</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Diamond Jewellery</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Uncut-Diamond Jewellery</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Platinum Jewellery</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Gold Jewellery With Ruby & Emerald</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Silver Item (Regular)</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Silver Jewellery (On MRP)</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Diamond Jewellery (On MRP)</td>
        <td className="py-2 px-4">0%</td>
        <td className="py-2 px-4">25% Off</td>
        <td className="py-2 px-4">10% Off</td>
        <td className="py-2 px-4">1000</td>
      </tr>
    </tbody>
  </table>
</div>


      <p className='text-2xl font-semibold mb-4'>GoldField Pre Close Benefits</p>
      <table>
      </table>
      <p className='mb-20'>Now you can plan your wedding and Special Occasions Jewellery purchase from 7th month of enrolments with VA* Benefits</p>
      <button className='btn-primary' onClick={handleClick}>Join Schemes</button>
    </div>
  );
};

export default GoldSchemes;
