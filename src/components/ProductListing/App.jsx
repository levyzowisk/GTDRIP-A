// import "./style.css";
// import ProductCard from "../../components/ProductCard/App";
// import img from "../../assets/tenis.png";

// const product = {
//   img: img,
//   descontooff: "30% OFF",
//   title: "Tênis",
//   nomeproduto: "K-Swiss V8 - Masculino",
//   preco: "$200",
//   precodesconto: "$100",
// };

// export default function ProductListing() {
//   return (
//     <div className="productListing">
//       {[...Array(6)].map((_, index) => (
//         <ProductCard
//           key={index}
//           img={product.img}
//           descontooff={product.descontooff}
//           title={product.title}
//           nomeProduto={product.nomeproduto}
//           preco={product.preco}
//           precoDesconto={product.precodesconto}
//         />
//       ))}
//     </div>
//   );
// }

import React from "react";
import "./style.css";
import ProductCard from "../../components/ProductCard/App";

export default function ProductListing({ products, columns, rows }) {
  return (
    <div
      className="productListing"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          img={product.img}
          descontooff={product.descontooff}
          title={product.title}
          nomeProduto={product.nomeproduto}
          preco={product.preco}
          precoDesconto={product.precodesconto}
        />
      ))}
    </div>
  );
}