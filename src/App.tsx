// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./redux/productSlice";
import type { AppDispatch, RootState } from "./redux/store";
import ProductList from "./components/ProductList";
import WishList from "./components/WishList";
import Details from "./pages/Details";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const { basket } = useSelector((state: RootState) => state.basket);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  const { wishList } = useSelector((state: RootState) => state.wishlist);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);
  return (
    <>
      <Header />
      <ProductList />
      <WishList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
