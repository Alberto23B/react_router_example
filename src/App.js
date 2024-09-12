import './App.css';
import { useRoutes } from "react-router-dom";
import Expenses from './components/Expenses';
import Invoices from "./components/Invoices";
import Bills from "./components/Bills"
import Home from './components/Home';
import Paid from "./components/Paid"
import MainMenu from './components/MainMenu';
import Balance from './components/Balance';
import Login from './components/Login';
import { RequireAuth } from './hooks/auth';

function App() {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path:"/",
          element: <MainMenu />
        },
        {
          path:"/invoices",
          element: <Invoices />,
          children: [
            {
              index: true,
              element: <h1 className='index'>Select an invoice</h1>
            },
            {
              path:"/invoices/:invoiceId",
              element: <Bills />
            },
          ]
        },
        {
          path:"/expenses",
          element: <Expenses />,
          children: [
            {
              index: true,
              element: <h1 className='index'>Select an expense</h1>
            },
            {
              path: "/expenses/:expenseId",
              element: <Paid />
            },
          ]
        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path:"/balance",
          element: <RequireAuth><Balance /></RequireAuth>
        },
        {
          path:"*",
          element:
            <main className='selected-element'>
              <p>There is nothing here!</p>
            </main>
        }
      ]
    },  
  ])

  
  return routes
}

export default App;
