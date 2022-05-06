import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import NavBar from "./NavBar";
import Grid from "@mui/material/Grid";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const itemRE = [
    {
      id: "1",
      title: "Casa 1",
      price: "$2,000,000",
      pictureUrl: "img1",
      stock: 2,
      shortDescription: "Descripción corta del producto 1",
    },
    {
      id: "2",
      title: "Casa 2",
      price: "$3,000,000",
      pictureUrl: "img2",
      stock: 10,
      shortDescription: "Descripción corta del producto 2",
    },
    {
      id: "3",
      title: "Casa 3",
      price: "$4,000,000",
      pictureUrl: "img3",
      stock: 10,
      shortDescription: "Descripción corta del producto 3",
    },
    {
      id: "4",
      title: "Casa 4",
      price: "$5,000,000",
      pictureUrl: "img4",
      stock: 10,
      shortDescription: "Descripción corta del producto 4",
    },
  ];

  useEffect(() => {
    const require = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemRE);
      }, 2000);
    });

    require.then(
      (res) => {
        setItem(res);
      },
      (err) => {
        console.log("error ", err);
      }
    );
  }, []);
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <ItemDetail item={item[0]} initial={10} />
    </Grid>
  );
}
