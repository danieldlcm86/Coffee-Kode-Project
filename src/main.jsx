import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignInPage from './pages/auth/SignInPage.jsx';
import SignUpPage from './pages/auth/SignUpPage.jsx';
import TiendaPage from './pages/Tienda/TiendaPage.jsx';
import NosotrosPage from './pages/Nosotros/FaqsPage.jsx';
import ContactoPage from './pages/Contacto/ContactoPage.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import ResenasPage from './pages/Resenas/ResenasPage.jsx';
import FaqsPage from './pages/Nosotros/FaqsPage.jsx';
import TyCPage from './pages/Nosotros/TyCPage.jsx';

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
    path: "/contacto",
    element: <ContactoPage />,
  },
  {
    path: "/resenas",
    element: < ResenasPage />
  },
  {
    path: "quienes-somos",
    children: [
      { path: "nosotros", element: <NosotrosPage /> },
      { path: "preguntas-frecuentes", element: <FaqsPage /> },
      { path: "tyc", element: <TyCPage /> },
    ]
  },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
