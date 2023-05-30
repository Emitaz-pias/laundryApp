import "./App.css";
import Homepage from "./pages/homePage/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./pages/loginPage/LoginPage"
import { createContext,useState } from "react";
import MyAccountPage from "./pages/myAccountPage/MyAccount";
import OnlineStore from "./pages/onlineStorePage/OnlineStore";
import CheckoutPage from "./pages/checkoutPage/Checkout";
import Dashboard from "./pages/dashboard/Dashboard";
import Features from "./components/features/Features";
import LogoutPage from "./pages/checkoutPage/logOutPage/logOutPage";
export const UsersContext = createContext();
function App() {
  
  const PrivateRoute = ({ path, ...props }) => {
    if (isAuthenticated) {
      return <Route path={path} {...props} />;
    } else {
      return <Navigate to="/login" replace />;
    }
  }
// contex APIs
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [loggedInUser, setLoggedInUser] = useState({});
 const [selectedProduct, setSeltectedProduct] = useState({});
 const [selectedOrder, setSelectedOrder] = useState({});
 
  return (
    <UsersContext.Provider value={{
      auth:[isAuthenticated, setIsAuthenticated],
      user: [loggedInUser, setLoggedInUser],
      product: [selectedProduct, setSeltectedProduct],
      order: [selectedOrder, setSelectedOrder]
    }}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Homepage/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/myAccount" element={<MyAccountPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/logOutPage" element={<LogoutPage />} />


        {/* <PrivateRoute path="/" element={<MyAccountPage onLogout={handleLogout} />} />  */}
        </Routes>  
      

           </BrowserRouter>
           </UsersContext.Provider>
    
  );
}

export default App;
