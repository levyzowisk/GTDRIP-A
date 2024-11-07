// const products = [
//   {
//     name: "Nome do produto 1",
//     image: "https://url.imagem/do/produto1.png",
//     price: 200,
//     priceDiscount: 149.9,
//   },

//   {
//     name: "Nome do produto 1",
//     image: "https://url.imagem/do/produto1.png",
//     price: 49.9,
//   },
// ];

// import React from "react";
const products = [
  {
    name: "Nome do produto 1",
    image: "../../assets/product-images/produc-image-1.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Nome do produto 2",
    image: "../../assets/product-images/produc-image-2.jpeg",
    price: 200,
    priceDiscount: 49.9,
  },
  {
    name: "Nome do produto 3",
    image: "../../assets/product-images/produc-image-3.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Nome do produto 4",
    image: "../../assets/product-images/produc-image-4.jpeg",
    price: 200,
    priceDiscount: 49.9,
  },
  {
    name: "Nome do produto 5",
    image: "../../assets/product-images/produc-image-5.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Nome do produto 6",
    image: "../../assets/product-images/produc-image-1.jpeg",
    price: 200,
    priceDiscount: 49.9,
  },
  {
    name: "Nome do produto 7",
    image: "../../assets/product-images/produc-image-2.jpeg",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "Nome do produto 8",
    image: "../../assets/product-images/produc-image-3.jpeg",
    price: 200,
    priceDiscount: 49.9,
  },
];

// Componente que exibe a lista de produtos
export function ProductListing() {
  return (
    <div>
      <h1>Produtos</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Preço: R${product.price}</p>
            <p>Preço com desconto: R${product.priceDiscount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
