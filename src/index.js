import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './components/cart-context';
import './index.css';
import App from './App';
import ProductList from './components/ProductList';
import ContactForm from './components/contact';
import LoginForm from './components/login';
import FeedbackForm from './components/feedback';
import SignupPage from './components/signup';
import AboutUs from './components/about';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products",
    element: <ProductList />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/contact",
    element: <ContactForm />
  },
  {
    path: "/feedback",
    element: <FeedbackForm />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/about",
    element: <AboutUs />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
);
