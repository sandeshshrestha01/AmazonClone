import './App.css';
import Footer from './Component/Footer/footer';
import Navebar  from './Component/Navbar/navbar';
import HomeScreen from './Screen/Homescreen/homeScreen';
import { Routes, Route } from 'react-router-dom';
import ProductsElectronics from './Screen/Products/productsElectronics';
import Cart from './Screen/Cart/cart';
import SignUp from './Sign up/signUp';
import SignIn from './Sign In/signin';
import SignOut from './Sign Out/signout';


function App() {
  return (
    <div className="App">
      <Navebar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/> 
        <Route path='/Homescreen/homeScreen' element={<HomeScreen/>}/>
        <Route path='productsElectronics' element={<ProductsElectronics/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='signOut' element={<SignOut/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;