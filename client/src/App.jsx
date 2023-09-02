import {Navbar , Footer , ListeDips , Transactions , Welcome, ValiderDiplomes } from './components';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const App  = () => {
  let Component
  return (
    <div style={{
      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
      'wp-content/uploads/20201221222410/download3.png")',
      height: "300px", backgroundRepeat: "no-repeat"
    }}>
      <div  >
        <Footer/>
    </div>

    </div>
  );
}

export default App;
