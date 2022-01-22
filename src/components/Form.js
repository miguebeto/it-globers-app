import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const [title, setTilte] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const notify = () =>
    toast("Tu información fué enviado con exito, estaremos en contacto");

  const sendForm = (ev) => {
    ev.preventDefault();

    if (title.trim().length <= 2) {
      return alert("Debe digitar su nombre completo");
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        email: email,
        cellphone: cellphone,
        age: age,
        date: date,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        notify();
        setTilte("");
        setEmail("");
        setNumber("");
        setDate("");
        setAge("");
        console.log(json);
      });
  };

  return (
    <form
      className="form form-control-sm"
      onSubmit={(ev) => {
        sendForm(ev);
      }}
    >
      <div className="mb-1">
        <label className="col-sm-1 col-form-label" htmlFor="titulo">
          Nombre:{" "}
        </label>
        <input
          className="form-control-sm col-5"
          type="text"
          id="titulo"
          placeholder="Nombre ..."
          value={title}
          onChange={(e) => setTilte(e.target.value)}
          required
        />
      </div>
      <div className="mb-0">
        <label className="col-sm-1 col-form-label" htmlFor="email">
          Email:{" "}
        </label>
        <input
          className="form-control-sm col-5"
          type="email"
          id="email"
          placeholder="nombre@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-0">
        <label className="col-sm-1 col-form-label" htmlFor="cellphone">
          Celular:{" "}
        </label>
        <input
          className="form-control-sm col-5"
          type="cellphone"
          id="cellphone"
          placeholder="cell ..."
          value={cellphone}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-0">
        <label className="col-sm-1 col-form-label" htmlFor="age">
          Edad:{" "}
        </label>
        <input
          className="form-control-sm"
          type="number"
          id="Age"
          placeholder="+18"
          min="18"
          max="100"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="col-sm-1 col-form-label" htmlFor="range">
          Fecha:{" "}
        </label>
        <input
          className="form-control-sm"
          type="date"
          id="date"
          placeholder=""
          min="1922-01-21"
          max="2004-01-21"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary">Enviar</button>
      <ToastContainer autoClose={5000} />
    </form>
  );
};
