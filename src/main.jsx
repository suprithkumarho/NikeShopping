import React from 'react'  // importing create component
import ReactDOM from 'react-dom/client' //importing create DOM component
import './index.css'   // global import
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render( // 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
