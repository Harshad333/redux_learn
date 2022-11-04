import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Shop />
      </div>
    </div>
  );
}

export default App;
