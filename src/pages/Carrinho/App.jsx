import ProductListing from "../../components/ProductListing/App";
import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import "./style.css";


export default function HomePage() {
  return (
    <>
      <Layout>
        <Gallery></Gallery>
        <Section/>
        <ProductListing/>
      </Layout>
    </>
  );
}