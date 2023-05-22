import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Call your success callback
      onSuccess(details);
    });
  };

  return <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />;
};

export default PayPalButton;
