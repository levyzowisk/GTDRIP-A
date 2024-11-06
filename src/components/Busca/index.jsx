import React from "react";
import carrinho from "../../assets/carrinho.png";
import Logo from "../Logo/App";

import "./style.css";

export default function NavBar() {
  return (
    <>
      <div className="bar">
        <Logo />
        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="search-bar"
        />

        {/* Botões de Cadastro e Entrar */}
        <div>
          <button className="button">Cadastrar-se</button>
          <button className="button-primary">Entrar</button>
        </div>

        <img src={carrinho} alt="" />
      </div>
    </>
  );
}
