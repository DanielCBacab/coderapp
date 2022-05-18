import "./App.css";
import RoutesSite from "../src/routes/RoutesSite";
import GlobalStateContext from "./context/GlobalStateContext";

function App() {
  return (
    <GlobalStateContext>
      <RoutesSite setCart={setCart} cart={cart} />
    </GlobalStateContext>
  );
}

export default App;
