import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import Domain_banner from "./Components/Assets/banner_Domain.png";
import websites_banner from "./Components/Assets/banner_websites.png";
import Logo_banner from "./Components/Assets/banner_Logo.png";
import LoginSignup from "./Pages/LoginSignup";
import Thankyou from "./Pages/Thankyou";
import AboutUsContact from './Pages/AboutUsContact';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/websites" element={<ShopCategory banner={websites_banner} category="websites" />} />
          <Route path="/Domains" element={<ShopCategory banner={Domain_banner} category="Domain" />} />
          <Route path="/Logo" element={<ShopCategory banner={Logo_banner} category="Logo" />} />
          <Route path="/AboutUsContact" element={<AboutUsContact />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
          
          
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
