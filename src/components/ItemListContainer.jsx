import React, { useState, useEffect, setState } from "react";
import Grid from "@mui/material/Grid";
import ItemList from "./ItemList";
import db from "../service/firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [state, setState] = useState([]);
  // const itemsRE = [
  //   {
  //     id: "1",
  //     title: "Casa 1",
  //     price: "$2,000,000",
  //     pictureUrl: "img1",
  //     stock: 2,
  //     shortDescription: "Descripción corta del producto 1",
  //   },
  //   {
  //     id: "2",
  //     title: "Casa 2",
  //     price: "$3,000,000",
  //     pictureUrl: "img2",
  //     stock: 10,
  //     shortDescription: "Descripción corta del producto 2",
  //   },
  //   {
  //     id: "3",
  //     title: "Casa 3",
  //     price: "$4,000,000",
  //     pictureUrl: "img3",
  //     stock: 10,
  //     shortDescription: "Descripción corta del producto 3",
  //   },
  //   {
  //     id: "4",
  //     title: "Casa 4",
  //     price: "$5,000,000",
  //     pictureUrl: "img4",
  //     stock: 10,
  //     shortDescription: "Descripción corta del producto 4",
  //   },
  // ];




  const getData = async () => {
    const col = collection(db, 'products')
    try {
      const data = await getDocs(col)
      const result = data.doc.map(doc => { id: doc.id, })
    setState(result)
  }

};
  
  useEffect(() => {
    getData();
  });
  // useEffect(() => {
  //   const item = doc(db, "products", "72MZcYUhLcwJCyh9Qrf1");
  //   getDoc(item).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setState([...state, { id: snapshot.id, ...snapshot.data() }]);
  //     }
  //   });
  //   // const require = new Promise((resolve, reject) => {
  //   //   setTimeout(() => {
  //   //     resolve(itemsRE);
  //   //   }, 2000);
  //   // });

  //   // require.then(
  //   //   (res) => {
  //   //     setItems(res);
  //   //   },
  //   //   (err) => {
  //   //     console.log("error ", err);
  //   //   }
  //   // );
  // }, []);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <ItemList items={items} />
    </Grid>
  );
}
