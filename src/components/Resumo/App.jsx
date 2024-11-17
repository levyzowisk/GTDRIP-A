import React from "react";
import "./style.css"; 
import Resumo from "../../../src/assets/product-images/product-image-5.jpeg"

const ResumoCompra = () => {
  return (
    <div className="resumo-container">
      <h2>RESUMO</h2>
      <div className="resumo-item">
        <img
          alt="Tênis Nike Revolution 6"
          className="resumo-image"
        />
        <p className="resumo-title">Tênis Nike Revolution 6 Next Nature Masculino</p>
      </div>
      <div className="resumo-pricing">
        <p>
          <span>Subtotal:</span> <span>R$ 219,00</span>
        </p>
        <p>
          <span>Frete:</span> <span>R$ 0,00</span>
        </p>
        <p>
          <span>Desconto:</span> <span>R$ 30,00</span>
        </p>
        <hr />
        <p className="resumo-total">
          <span>Total:</span> <span>R$ 219,00</span>
        </p>
        <p className="resumo-parcelas">ou 10x de R$ 21,00 sem juros</p>
      </div>
      <button className="resumo-button">Realizar Pagamento</button>
    </div>
  );
};

export default Resumo;
