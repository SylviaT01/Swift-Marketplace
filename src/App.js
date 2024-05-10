import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <div >
    <Navbar />
    <Home />
    <Footer />
    </div>
  );
}

export default App;