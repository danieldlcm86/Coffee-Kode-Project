import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignInPage from './pages/auth/SignInPage.jsx';
import SignUpPage from './pages/auth/SignUpPage.jsx';
import TiendaPage from './pages/Tienda/TiendaPage.jsx';
import NosotrosPage from './pages/Nosotros/NosotrosPage.jsx';
import ContactoPage from './pages/Contacto/ContactoPage.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import ResenasPage from './pages/Resenas/ResenasPage.jsx';

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
  {
    path: "/tienda",
    element: <TiendaPage />,
  },
  {
    path: "/nosotros",
    element: <NosotrosPage />,
  },
  {
    path: "/contacto",
    element: <ContactoPage />,
  },
  {
    path: "/resenas",
    element: < ResenasPage />
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
