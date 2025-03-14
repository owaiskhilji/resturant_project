import { useEffect} from "react";
import './App.css'
import {Routes,Route,useLocation } from "react-router-dom";
import Home from "./Pages/Home"
import Prices from "./Pages/Prices"
import Menu from "./Pages/Menu"
import Aboutus from "./Pages/Aboutus"
import OurServices from "./Pages/OurServices"
import OpeningHours from "./Components/OpeningHours"
import Notfound from "./Pages/Notfound"
import ReservationPopup from "./Components/ReservationPopup"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




function App() {
  
  return (
<div className="overflow-x-hidden">
<Navbar />
<OpeningHours/>
    <ScrollToTop/>
    <ReservationPopup/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={< Aboutus/>} />
<Route path="/prices" element={< Prices/>} />
<Route path="/menu" element={< Menu/>} />
<Route path="/ourservices" element={< OurServices/>} />
<Route path="/*" element={< Notfound/>} />
</Routes>

<Footer/>
</div>
  )
}

export default App
