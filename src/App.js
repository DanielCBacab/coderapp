import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { useState, useEffect } from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

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

      {/* <ItemListContainer text={"Lista de productos"} /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
