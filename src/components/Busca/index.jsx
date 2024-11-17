import React from "react";
import { useNavigate } from "react-router-dom";
import carrinho from "../../assets/carrinho.png";
import Logo from "../Logo/App";
import "./style.css";

export default function Busca() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/carrinho");
  };

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
        <div className="auth-links">
          <a href="/cadastro" className="cadastro">
            Cadastre-se
          </a>
          <a href="/acessarconta" className="button-primary">
            Entrar
          </a>
        </div>

        <img
          src={carrinho}
          alt="Carrinho de Compras"
          className="cart-icon"
          onClick={handleCartClick}
        />
      </div>
    </>
  );
}
