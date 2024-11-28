import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ScrollToTop } from './components';
import { FilterProvider, CartProvider , UserProvider} from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CartProvider>
          <FilterProvider>
            <ScrollToTop/>
            <ToastContainer position={"top-center"} closeButton={false} autoClose={10000}/>
            <App />
          </FilterProvider>
        </CartProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);