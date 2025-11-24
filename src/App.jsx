import Navbar from './components/Navbar/Navbar'
import HeroSectionHome from './pages/Home/HeroHome/HeroSectionHome'
import BannerKits from './pages/Home/KitsProducts/BannerKits'
import Products from './pages/Home/Products/Products'
import Footer from './components/Footer/Footer'
import KitsProducts from './pages/Home/KitsProducts/KitProducts'

function App() {

  return (
    <>
      < Navbar />
      < HeroSectionHome />
      < Products />
      < BannerKits />
      < KitsProducts />
      < Footer />
    </>
  )
}

export default App
