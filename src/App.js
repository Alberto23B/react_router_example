import './App.css';
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <nav className='nav-bar'>
        <Link to="/" className='nav-link'><span>Home</span></Link>
        <Link to="/invoices" className='nav-link'><span>Invoice</span></Link>
        <Link to="/expenses" className='nav-link'><span>Expenses</span></Link>      
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
