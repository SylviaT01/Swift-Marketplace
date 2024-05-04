import './App.css';
import { Button } from './components/button';
import { Navbar } from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <Button text="Click Me" />
      </div>
    </>

  );
}

export default App;