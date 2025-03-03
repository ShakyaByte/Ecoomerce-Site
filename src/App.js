import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShopCategories from './components/Shopcategories';
import FurniturePage from './pages/FurniturePage'; 
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElectronicsPage from './pages/ElectronicsPage';
import BooksPage from './pages/BooksPage';
import ShoesPage from './pages/ShoesPage';
import BagPage from './pages/BagPage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUsPage';
import DeliveryPage from './pages/DeliveryPage';
import RegisterPage from './authentication/RegisterPage';
import LoginPage from './authentication/login';



function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}
     
      <Routes>
        {/* Home Route */}
        <Route path="/"
          element={
            <>
              <HeroSection />
              <ShopCategories />
              <ProductList />
              
            </>
          }
        />

        {/* Furniture Route */}
        <Route path="/furniture" element={<FurniturePage />} />

        <Route path="/bags" element={<BagPage/>} /> 

        {/* Electronics Route */}
        <Route path="/electronics" element={<ElectronicsPage />} /> 

         {/* Bags Route */}
         <Route path="/books" element={<BooksPage />} /> 

         {/* Shoes Route */}
         <Route path="/shoes" element={<ShoesPage />} /> 

         <Route path="/cart" element={<CartPage />} /> 

         <Route path="/aboutus" element={<AboutUs/>} /> 

         <Route path="/delivery" element={<DeliveryPage/>} /> 

         <Route path="/register" element={<RegisterPage/>} /> 
        
         <Route path="/login" element={<LoginPage/>} /> 

      </Routes>
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;
