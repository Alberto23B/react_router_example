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
          <Route path='/invoices' element={ <Invoices />}>
            <Route index element={
              <main className='selected-element'>
                <h2>Select an Invoice</h2>
              </main>
            }></Route>
            <Route path='/invoices/:invoiceId' element={<Bills />}/>
          </Route>
          <Route path='/expenses' element={ <Expenses />} />
          <Route path="*" element={
            <main className='selected-element'>
              <p>There is nothing here!</p>
            </main>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

