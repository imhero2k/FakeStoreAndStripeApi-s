import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import './index.css';


// Stripe API integration
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const container = document.getElementById('root');
const root = createRoot(container);

const stripePromise = loadStripe('pk_test_51QkfDZGpz6ZNTAoQsaK4UQOae1LHXCngbBdvnxKWP2MRHqFFcqoWbVpJoxKsiPXkrs1Vy8D38tvwBdD41yMiWgue00g8fIfwNV');

root.render(
   <Provider store={store}>
      <Elements stripe={stripePromise}>
         <App />
      </Elements>
   </Provider>
);

reportWebVitals();