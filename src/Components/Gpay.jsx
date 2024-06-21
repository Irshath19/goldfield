import React from 'react';
import GooglePayButton from 'react-google-pay-button';

const Gpay = () => {
  const onGooglePaySuccess = (paymentDetails) => {
    console.log('Payment details:', paymentDetails);
  };

  return (
    <div>
      <GooglePayButton
        environment="TEST" // Use "PRODUCTION" in a real environment
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'YOUR_PAYMENT_GATEWAY',
                  gatewayMerchantId: 'YOUR_MERCHANT_ID',
                },
              },
            },
          ],
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '10.00',
            currencyCode: 'USD',
          },
          merchantInfo: {
            merchantName: 'Your Merchant Name',
            merchantId: 'YOUR_MERCHANT_ID',
          },
        }}
        onSuccess={onGooglePaySuccess}
      />
    </div>
  );
};

export default Gpay;
