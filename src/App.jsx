import { Routes, Route } from "react-router-dom";

// Pages import
import HomePage from "./pages/homepage/HomePage";
import MenPage from "./pages/menpage/MenPage";
import CustomSuitsPage from "./pages/customsuitspage/CustomSuitsPage";
import SuitsForMensPage from "./pages/suitsformenpage/SuitsForMensPage";
import MensOutfitPage from "./pages/mensoutfitspage/MensOutfitPage";
import ProductPage from "./pages/productpage/ProductPage";
import CartPage from "./pages/cartpage/CartPage";
import ProductAddToCartPage from "./pages/productaddtocartpage/ProductAddToCartPage";
import BlogPage from "./pages/blogpage/BlogPage";
import ContactUsPage from "./pages/contactuspage/ContactUsPage";
import CustomTailoring from "./pages/customtailoring/CustomTailoring";
import SampleComponent from "./commoncomponents/SampleComponent";
import AdminRegisterPage from "./admin/AdminRegisterPage";
import AdminLoginPage from "./admin/AdminLoginPage";
import AdminDashboardPage from "./admin/AdminDashboardPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import IndividualAccessoryPage from "./pages/IndividualAccessoryPage";

// Chakra hooks
import { 
  useDisclosure
 } from "@chakra-ui/react";

import { useState, useRef } from "react";

const App = () => {

  
  const [isAirMenuOpen, setIsAirMenuOpen] = useState(false);
  const [whichSumAirMenuOption, setWhichSumAirMenuOption] = useState("");
  const [isSubAirMenuOpen, setIsSubAirMenuOpen] = useState(false);
  const [isSubAirMenuProductMenuOpen, setIsSubAirMenuProductMenuOpen] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage 
          isAirMenuOpen={isAirMenuOpen} 
          setIsAirMenuOpen={setIsAirMenuOpen} 
          whichSumAirMenuOption={whichSumAirMenuOption}
          setWhichSumAirMenuOption={setWhichSumAirMenuOption}
          isSubAirMenuOpen={isSubAirMenuOpen}
          setIsSubAirMenuOpen={setIsSubAirMenuOpen}
          isSubAirMenuProductMenuOpen={isSubAirMenuProductMenuOpen}
          setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/custom-suits" element={<CustomSuitsPage
          isAirMenuOpen={isAirMenuOpen} 
          setIsAirMenuOpen={setIsAirMenuOpen} 
          whichSumAirMenuOption={whichSumAirMenuOption}
          setWhichSumAirMenuOption={setWhichSumAirMenuOption}
          isSubAirMenuOpen={isSubAirMenuOpen}
          setIsSubAirMenuOpen={setIsSubAirMenuOpen}
          isSubAirMenuProductMenuOpen={isSubAirMenuProductMenuOpen}
          setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} />} />
        <Route path="/suits" element={<SuitsForMensPage />} />
        <Route path="/mens-outfits" element={<MensOutfitPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/add-to-cart" element={<ProductAddToCartPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/custom-clothing" element={<CustomTailoring />} />
        <Route path="/sample" element={<SampleComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/accessories/:accessory" element={<IndividualAccessoryPage />} />
      </Routes>
    </div>
  );
};

export default App;