import "./style.css";
import ProductCard from "../../components/ProductCard/App";
import img from "../../assets/tenis.png";

const Product = {
  img: img,
  descontooff: "30% OFF",
  title: "Tênis",
  nomeproduto: "K-Swiss V8 - Masculino",
  preco: "$200",
  precodesconto: "$100",
};

function ProductListing(props) {
  return (
    <>
      <div className="productListing">
        {[...Array(8)].map((g, index) => (
          <ProductCard
            key={index}
            img={props.product.img}
            descontooff={props.product.descontooff}
            title={props.product.title}
            nomeProduto={props.product.nomeproduto}
            preco={props.product.preco}
            precoDesconto={props.product.precodesconto}
          />
        ))}
      </div>
    </>
  );
}

export default ProductListing;
