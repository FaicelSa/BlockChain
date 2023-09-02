import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import 'bootstrap/dist/css/bootstrap.css';
//import './components/styles.css';
import '../../bs/css/bootstrap.min.css';
import  {AuthentificationProvider} from './context/AuthentificationContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthentificationProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthentificationProvider>
  

);
