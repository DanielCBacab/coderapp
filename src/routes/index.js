import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Error from "../views/Error";
import Checkout from "../views/Checkout";
import Layout from "../components/Layout";
import ItemDetailContainer from "../views/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";

const RutasComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Checkout />} />
          <Route
            path="/item-detail/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route path="/categories/:catId" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RutasComp;
