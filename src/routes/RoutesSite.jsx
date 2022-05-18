import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Error from "../views/Error";

const RoutesSite = ({ cart, setCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/item-detail/id/:id"
            element={<ItemDetailContainer cart={cart} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSite;
