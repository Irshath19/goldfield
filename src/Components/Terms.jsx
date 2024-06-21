import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment'; 
const Terms = () => {
  // const {currUser} = useContext(UserContext);
  // console.log(currUser);
  const [accepted, setAccepted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const handleAcceptanceChange = () => {
    setAccepted(!accepted);
  };

  const handlePaymentSuccess = (response) => {
    navigate('/payment');
  };

  const handleClick = () => {
    if (accepted) {
      setShowPayment(true);
    }
  };

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Payments and Benefits</h2>
        <p>
          1. Customers can get NO VA* (up to 18%) only if payments are made every month without default.
        </p>
        <p>2. In case of default, VA benefits will be decreased.</p>
        <p>3. Maturity is completion of 11 months.</p>
        <p>4. The purchase plan cannot be extended under any circumstances.</p>
        <p>5. Customers can buy Jewellery only after completing 11 months.</p>
        <p>6. No prevailing offers/discounts are applicable while purchasing jewellery under this Purchase plan.</p>
        <p>
          7. If jewellery weighs over and above the accumulated weight, VA will be charged for the excess quantity. If
          the VA of the selected jewellery is over and above 18%, the excess VA will be charged.
        </p>
        <p>8. Gold coins can be purchased under this scheme.</p>
      </section>

      {/* Add more sections as needed for your Terms and Conditions */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Payment and Redemption Process</h2>
        <p>9. No cash refund will be permitted under any circumstances.</p>
        <p>10. EMIs must be paid before the 10th of every month.</p>
        <p>11. Collect a receipt for the amount remitted from Pothys Swarna Mahal. It is mandatory.</p>
        <p>12. In case payment was done through Cheque/PDC/UPI (Gpay, PhonePay, etc.), a receipt can be obtained via Whatsapp/mail.</p>
        <p>13. Benefits under the scheme can be availed only if regular monthly payments are made.</p>
        <p>14. Partial withdrawal from the advance paid will not be allowed.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Additional Terms</h2>
        <p>15. GST charges are levied as per Govt. norms.</p>
        <p>16. Produce proof of ID and bank passbook at the time of joining and redemption.</p>
        <p>
          17. On completion of eleven months from the date of enrollment, the customer will be eligible to purchase the
          selected gold jewellery with no wastage (VA) up to 18% under New Swarna Subhiksham purchase plan, including
          gold coins and all special items like antique, precious, bridal jewellery & pooja items limited to the
          accumulated gold weight. However, if the customer wishes to purchase diamond jewellery, platinum jewellery,
          silver articles, or silver jewellery, the customer will be eligible for the benefits as listed in the benefits
          table.
        </p>
        <p>18. Customers who choose to pre-close within 6 months of enrollment will not be eligible for any benefits.</p>
        <p>
          19. Customers will have to bring the passbook if opted every month while paying the advance amount and should
          be surrendered at the time of the purchase of jewellery.
        </p>
        <p>
          20. In case of a change in address or loss of customer receipt book, the customer should inform the company
          immediately and apply for a new customer receipt book with KYC details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at{' '}
          <a href="mailto:info@example.com" className="text-blue-500">
            info@example.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Acceptance</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="acceptTermsCheckbox"
            className="form-checkbox h-5 w-5 text-golden-500"
            checked={accepted}
            onChange={handleAcceptanceChange}
          />
          <label htmlFor="acceptTermsCheckbox" className="ml-2 text-sm text-gray-700">
            I have read and accept the Terms and Conditions
          </label>
        </div>
      </section>

      {showPayment ? (
        <Payment onSuccess={handlePaymentSuccess} />
      ) : (
        <button
          className={`bg-brandPrimary text-white py-2 px-4 rounded ${!accepted ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!accepted}
          onClick={handleClick && handleadded}
        >
          Accept and Continue
        </button>
      )}
    </div>
  );
};

export default Terms;
