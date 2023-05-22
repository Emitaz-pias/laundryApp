import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalButton from './PaypalButton';

const PayPalProvider = ({ PayPalButton }) => {
  const clientId = 'YOUR_PAYPAL_CLIENT_ID';
  
  return (
    <PayPalScriptProvider options={{ 'client-id': clientId }}>
      {PayPalButton}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;
