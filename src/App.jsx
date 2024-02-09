import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Register from "./pages/login/Register";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";

const App = () => {
  const { isLoggIn } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <BrowserRouter>
      {isLoggIn && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </>
      )}
      {!isLoggIn && <Login />}
    </BrowserRouter>
  );
};

export default App;
