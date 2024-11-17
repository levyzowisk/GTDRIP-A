import React from "react";
import img from "../../assets/tenis.png";
import "./style.css";

export default function Carrinho() {
  const cartItems = [
    {
      img: img, 
      title: "Tênis Nike Revolution 6 Next Nature Masculino",
      color: "Vermelho / Branco",
      size: 42,
      unitPrice: 219.0,
      discountPrice: 189.0,
      quantity: 1,
    },
  ];

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>MEU CARRINHO</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.title} className="item-image" />
            <div className="item-details">
              <h4>{item.title}</h4>
              <p>Cor: {item.color}</p>
              <p>Tamanho: {item.size}</p>
            </div>
            <div className="item-quantity">
              <button className="quantity-btn">-</button>
              <span>{item.quantity}</span>
              <button className="quantity-btn">+</button>
              <a href="#" className="remove-item">Remover item</a>
            </div>
            <div className="item-pricing">
              <p className="old-price">
                R$ {item.unitPrice.toFixed(2).replace(".", ",")}
              </p>
              <p className="new-price">
                R$ {item.discountPrice.toFixed(2).replace(".", ",")}
              </p>
            </div>
          </div>
        ))}
        <div className="discount-shipping">
          <div>
            <input type="text" placeholder="Insira seu código" />
            <button className="pink-button">OK</button>
          </div>
          <div>
            <input type="text" placeholder="Insira seu CEP" />
            <button className="pink-button">OK</button>
          </div>
        </div>
      </div>
      <div className="cart-right">
        <h3>RESUMO</h3>
        <p>Subtotal: R$ 219,00</p>
        <p>Frete: R$ 0,00</p>
        <p>Desconto: R$ 30,00</p>
        <h2>Total: R$ 189,00</h2>
        <button className="yellow-button">Continuar</button>
      </div>
    </div>
  );
}