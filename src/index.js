import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Invoices from "./components/Invoices";
import Expenses from "./components/Expenses"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={ <App />} />
        <Route path='/invoices' element={ <Invoices />} />
        <Route path='/expenses' element={ <Expenses />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

