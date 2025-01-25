import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ShopPage from './pages/ShopPage.js';
import CheckoutPage from './pages/CheckoutPage.js';
import PaymentPage from './pages/PaymentPage.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

function App() {
   return (
      <BrowserRouter>
         <Header/>
         <Routes>
            <Route exact path="/shop" element={<ShopPage />}/>
            <Route exact path="/checkout" element={<CheckoutPage/>}/>
            <Route exact path="/payment" element={<PaymentPage/>}/>
            <Route
               path="*"
               element={<Navigate to="/shop" replace />}
            />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;