import './App.css';
import { Navbar } from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <>
    <div >
    <Navbar />
    </div>
    <div>
    <Home />
    </div>
    <div>
    <Footer />
    </div>
    </>
  );
}

export default App;