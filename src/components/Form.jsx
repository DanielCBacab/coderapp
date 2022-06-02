import React, { useState } from "react";
import { GlobalProvider } from "../context/GlobalStateContext";
import useFirebase from "../hooks/useFirebase";
import Swal from "sweetalert2";
import { validateFullFilled } from "../helpers/index";

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName}
        placeholder={placeholder}
      />
      {error.name && (
        <h6 className="text-danger my-2 text-uppercase">{error.name}</h6>
      )}
    </div>
  );
};

const Form = ({ total, buyed }) => {
  const { clearCart } = GlobalProvider();
  const { fetchGenerateTicket } = useFirebase();

  const [form, setForm] = useState({
    buyer: {
      name: "",
      lastName: "",
      email: "",

      phone: "",
    },
    total: total,
    items: buyed,
  });

  const [error, setError] = useState({});
  const {
    buyer: { email, name, lastName, phone },
  } = form;

  const onSubmit = (e) => {
    console.log({ datas: form });
    e.preventDefault();
    if (validateFullFilled([email, name, lastName, phone])) {
      Swal.fire({
        title: "Opps...",
        text: "Faltan campos por completar",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Bien hecho",
      text: "Hemos recibido su orden de compra",
      icon: "success",
    });
    fetchGenerateTicket({ datas: form });
    clearCart();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      },
    });
  };
  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio" });
      return;
    }
    setError({});
  };
  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-uppercase text-center my-4">Datos recipiente</h3>
      {Object.keys(form.buyer).map((key, index) => (
        <Input
          key={index}
          className="mb-3"
          type="text"
          name={`${key}`}
          value={key.value}
          onChange={handleChange}
          onBlur={handleBlur}
          inputClassName={`form-control ${error[key] && "is-invalid"}`}
          placeholder={`${key}`}
          error={error}
        />
      ))}
      <div className="border row d-flex px-2">
        <div className="col-12 col-lg-9">
          <p className="fs-4 text-uppercase">Total</p>
        </div>
        <div className="col-12 col-lg-3">
          <p className="fs-4">${total}</p>
        </div>
        <button
          type="submit"
          className="btn btn-primary text-uppercase w-100 my-4"
        >
          terminar la compra
        </button>
      </div>
    </form>
  );
};

export default Form;
