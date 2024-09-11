import './App.css';
import { useRoutes } from "react-router-dom";
import Expenses from './components/Expenses';
import Invoices from "./components/Invoices";
import Bills from "./components/Bills"
import Home from './components/Home';
import Paid from "./components/Paid"
import MainMenu from './components/MainMenu';


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
              element: <h1>Select an invoice</h1>
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
              element: <h1>Select an expense</h1>
            },
            {
              path: "/expenses/:expenseId",
              element: <Paid />
            },
          ]
        },
        {
          path:"/login",
          element: <h1>Login</h1>
        },
        {
          path:"/balance",
          element: <h1>Balance</h1>
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
