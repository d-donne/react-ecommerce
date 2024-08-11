import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSingUp from "./pages/LoginSignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/men"
          element={
            <ShopCategory category="men" banner_img="/banner/banner_men.png" />
          }
        />

        <Route
          path="/women"
          element={
            <ShopCategory
              category="women"
              banner_img="/banner/banner_women.png"
            />
          }
        />

        <Route
          path="/kids"
          element={
            <ShopCategory
              category="kids"
              banner_img="/banner/banner_kids.png"
            />
          }
        />

        <Route path="/product/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<LoginSingUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
