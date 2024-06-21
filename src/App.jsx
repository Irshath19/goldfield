import React,{useState,createContext} from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Service from './Components/Service';
import traditionaldesign from './Components/traditionaldesign';
import Designs from './Components/Designs';
import About from './Components/About';
import MyFooter from './Components/MyFooter';
import GoldSchemes from './Components/goldschemes.jsx';
import Mainpage from './Components/Mainpage.jsx';
import Payment from './Components/Payment.jsx';
import Terms from './Components/Terms';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import PaymentHistory from './AdminPanel/paymenthistory';
import Pending from './Components/pending';
import AdminLogin from './AdminPanel/adminlogin';
import Gpay from './Components/Gpay';
import ContactList from './AdminPanel/Contactusview';
import AdminPanel from './AdminPanel/adminpanel';
// import Service from './Components/Service.mjs';
export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

function App() {
  const [user, setUser] = useState('');
  const updateUser = (username) => {
    setUser(username);
  };
  const [currUser, setCurrUser] = useState();
  console.log(currUser);
  return (
      <>
          {/* <Home/>
          <Designs/>
          <Service/>
        <About/> */}

  <UserContext.Provider value={{user,updateUser,  currUser, setCurrUser}}>
          <Router>
            <Navbar/>
            <Routes>
            <Route path="/goldschemes" element={<GoldSchemes />} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Register/>} />
            <Route path="/pending" element={<Pending/>} />
              <Route path='/' element={<Mainpage/>}/>
              <Route path='/terms' element={<Terms/>}/>
              <Route path='/payment-history' element={<PaymentHistory/>}/>
              <Route path='/adminlogin' element={<AdminLogin/>}/>
              <Route path='/adminpanel' element={<AdminPanel/>}/>
              <Route path='/gpay' element={<Gpay/>}/>
              <Route path='/contactlistview' element={<ContactList/>}/>
            </Routes>
          <MyFooter/>
          </Router>
  </UserContext.Provider>
      </>
  );
}

export default App;
