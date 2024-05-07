import './App.css';
import { Navbar } from './components/navbar';
import Footer from './components/footer'

function App() {
  return (
    <>
    <div className="bg-cover h-screen bg-[url('./assets/page1.jpeg')]">
    <Navbar />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;