import "./App.css";
import Homepage from "./pages/homePage/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./pages/loginPage/LoginPage"
import { useState } from "react";
import MyAccountPage from "./pages/myAccountPage/MyAccount";
import OnlineStore from "./pages/onlineStorePage/OnlineStore";
import CheckoutPage from "./pages/checkoutPage/Checkout";
import Dashboard from "./pages/dashboard/Dashboard";
import Features from "./components/features/Features";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // const PrivateRoute = ({ path, ...props }) => {
  //   if (isAuthenticated) {
  //     return <Route path={path} {...props} />;
  //   } else {
  //     return <Navigate to="/login" replace />;
  //   }
  // }
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={ <Homepage/>}/>
      {/* <Route path="/features" element={<Features/>}/> */}
      {/* <Route path="/checkout" element={<CheckoutPage/>} /> */}
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/register" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/myAccount" element={<MyAccountPage onLogout={handleLogout} />} />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* <PrivateRoute path="/" element={<MyAccountPage onLogout={handleLogout} />} />  */}
        </Routes>  
           </BrowserRouter>
    
  );
}

export default App;
