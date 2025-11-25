import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignInPage from './pages/auth/SignInPage.jsx';
import SignUpPage from './pages/auth/SignUpPage.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/iniciar-sesion",
    element: <SignInPage />,
  },
  {
    path: "/registrarse",
    element: <SignUpPage />,
  },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
