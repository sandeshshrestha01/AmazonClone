import './App.css';
import Footer from './Component/Footer/footer';
import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Screen/Homescreen/homeScreen';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cart from './Screen/Cart/cart';
import SignUp from './Component/Sign up/signUp';
import SignIn from './Component/Signin/Signin';
import SignOut from './Component/Sign Out/signout';
import { ToastContainer } from 'react-toastify';
import ProductsList from './Screen/Products/ProductsList ';
import { useEffect } from 'react';
import ProductDetail from './Screen/ProductDetails/productDetail';


function App() {
  const location = useLocation();
   useEffect(() => {
        // This code will run whenever the location.pathname changes
        console.log('Route changed to:', location.pathname);
        // Fetch new data, reset state, etc.
      }, [location.pathname]);
  return (
    <div className="App" key={location.key} >
      <Navbar  />
      <Routes>
        <Route path='/' element={<HomeScreen />} /> 
        <Route path='/homescreen/homescreen' element={<HomeScreen/>} />
        <Route path='/product/:category' element={<ProductsList />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signout' element={<SignOut />} />

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;