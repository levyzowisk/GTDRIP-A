import ProductListing from "../../components/ProductListing/App";
import img from "../../assets/tenis.png";
import FilterGroup from "../../components/FilterGroup/App";
import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import "./style.css";


export default function HomePage() {
  return (
    <>
      <Layout>
        <Gallery></Gallery>
        <Section />
        <ProductListing/>
        {/* <FilterGroup /> */}
      </Layout>
    </>
  );
}
