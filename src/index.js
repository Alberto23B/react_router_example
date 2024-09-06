import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Invoices from "./components/Invoices";
import Expenses from "./components/Expenses"
import Bills from "./components/Bills"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={ <App />}>
          <Route path='/invoices' element={ <Invoices />} />
          <Route path='/invoices/:invoiceId' element={<Bills />}/>
          <Route path='/expenses' element={ <Expenses />} />
          <Route path="*" element={
            <main className='text-center'>
              <p className='text-3xl'>There is nothing here!</p>
            </main>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

