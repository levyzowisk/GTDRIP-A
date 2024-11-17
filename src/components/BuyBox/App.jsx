import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import StarActive from "../../assets/svgs/star-active.svg";
import StarDesactive from "../../assets/svgs/star-desactive.svg";
import StarWhite from "../../assets/svgs/star-white.svg";

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const [selectedStars, setSelectedStars] = useState(stars);
  const navigate = useNavigate();

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  const handleBuyClick = () => {
    navigate("/carrinho");
  };

  const renderStars = (stars) => {
    const totalStars = 5;
    const filledStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <img
            key={index}
            src={StarActive}
            alt="star"
            className="star-icon"
            onClick={() => handleStarClick(index)}
          />
        ))}
        {halfStar && (
          <img
            src={StarDesactive}
            alt="star"
            className="star-icon"
            onClick={() => handleStarClick(filledStars)}
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <img
            key={index}
            src={StarDesactive}
            alt="star"
            className="star-icon"
            onClick={() => handleStarClick(filledStars + (halfStar ? 1 : 0) + index)}
          />
        ))}
      </>
    );
  };

  return (
    <div className="product-details">
      <h2 className="product-title">{name}</h2>
      <p className="product-category">{reference}</p>

      <div className="rating">
        <span className="stars">
          {renderStars(selectedStars)} <img src={StarWhite} alt="star" className="star-icon" />
        </span>
        <span className="rating-value">{selectedStars}</span>
        <span className="review-count">({rating} avaliações)</span>
      </div>

      <div className="price">
        {priceDiscount ? (
          <>
            <span className="current-price">{priceDiscount}</span>
            <span className="original-price">{price}</span>
          </>
        ) : (
          <span className="current-price">{price}</span>
        )}
      </div>

      <p className="product-description">{description}</p>

      {children}

      <button className="buy-button" onClick={handleBuyClick}>
        COMPRAR
      </button>
    </div>
  );
}