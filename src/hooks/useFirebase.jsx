import {
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  collection,
} from "firebase/firestore";
import db from "../firebase/config";
import { useState } from "react";
import { GlobalProvider } from "../context/GlobalStateContext";

const useFirebase = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [setLoading] = GlobalProvider();

  const fetchGetDataCollection = async () => {
    setLoading(true);
    try {
      const data = collection(db, "products");
      const col = await getDocs(data);
      const response = col.docs.map((doc = { id: doc.id, ...doc.data() }));
      setProducts(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGetIndividualProduct = async ({ id }) => {
    setLoading(true);
    try {
      const document = doc(db, "products", id);
      const response = await getDoc(document);
      let result = response.data();
      setProduct({ id: response.id, ...result });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenerateTicket = async ({ datas }) => {
    setLoading(true);
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, datas);
      setLoading(false);
      console.log(order.id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUpdateDoc = async ({ id }) => {
    const orderDoc = doc(db, "products", id);
    try {
      await updateDoc(orderDoc, { price: 0 });
      console.log("Producto actualizado");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    products,
    product,
    fetchUpdateDoc,
    fetchGenerateTicket,
    fetchGetIndividualProduct,
    fetchGetDataCollection,
  };
};

export default useFirebase;
