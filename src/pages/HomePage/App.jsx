import ProductListing from "../../components/ProductListing/App";
import img from "../../assets/tenis.png";
import ProductListing from "../../components/ProductListing/App";
import img from "../../assets/tenis.png";
import FilterGroup from "../../components/FilterGroup/App";
import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import "./style.css";

const Product = {
  img: img,
  descontooff: "30% OFF",
  title: "Tênis",
  nomeproduto: "K-Swiss V8 - Masculino",
  preco: "$200",
  precodesconto: "$100",
};

export default function HomePage() {
  return (
    <>
      <ProductListing product={Product} />
      <FilterGroup />

      <Layout>
        <Gallery></Gallery>
        <Section />
      </Layout>
    </>
  );
}
