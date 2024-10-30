import React from 'react';
import './style.css';
import '../../../public/carrinho'

function NavBar() {
  return (
    <div className="navbar">
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="search-bar"
      />
      
      {/* Botões de Cadastro e Entrar */}
      <button className="button">Cadastrar-se</button>
      <button className="button primary">Entrar</button>
      
      {/* Ícone do carrinho com contador */}
      <button className='button'></button>
    
  );
}

export default NavBar;
