import "./App.css";
import RoutesSite from "../src/routes/RoutesSite";
import GlobalProvider from "./context/GlobalStateContext";

function App() {
  return (
    <GlobalProvider>
      <RoutesSite />
    </GlobalProvider>
  );
}

export default App;
