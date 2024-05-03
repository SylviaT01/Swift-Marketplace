import './App.css';
import { Button } from './components/button';
import { Navbar } from './components/navbar';
// import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <Button text="Click Me" />
      </div>
      {/* <ProductList /> */}
    </>

  );
}

export default App;