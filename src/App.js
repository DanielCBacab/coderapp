import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [items, setItems] = useState([]);
  // const item = [
  //   {
  //     name: "Daniel",
  //     edad: 10,
  //   },
  // ];

  // useEffect(() => {
  //   const task = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(item);
  //     }, 5000);
  //   });

  //   task
  //     .then((res) => {
  //       setItems(res);
  //     })
  //     .then(() => console.log(items))
  //     .catch((err) => console.log(err));

  //   console.log(items);
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>Lista de inmuebles</h1>
      <ItemListContainer text={"Lista de productos"} />
    </div>
  );
}

export default App;
