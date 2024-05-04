import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import ProductList from './components/ProductList';
import ContactForm from './components/contact';
import LoginForm from './components/login';
import FeedbackForm from './components/feedback';
// import reportWebVitals from './reportWebVitals';

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

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render
root.render(<RouterProvider router={router} />);
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
