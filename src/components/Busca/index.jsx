import React from "react";
import "./style.css";
import carrinho from "../../../public/carrinho.png"

function NavBar() {
  return (
    <>
      <div className="bar">
        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="search-bar"
        />

        {/* Botões de Cadastro e Entrar */}
        <button className="button">Cadastrar-se</button>
        <button className="button primary">Entrar</button>

        <img src={carrinho} alt=""/>
      </div>
    </>
  );
}
export default NavBar