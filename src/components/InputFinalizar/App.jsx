import React from "react";
import "./style.css";

export default function InputFinalizar(props) {
  return (
    <div className="campo">
      <form className="info">
        <label htmlFor={props.htmlFor}>{props.text}</label>
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        />
      </form>
    </div>
  );
}
