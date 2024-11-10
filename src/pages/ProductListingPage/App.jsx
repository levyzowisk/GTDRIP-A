import ProductListing from "../../components/ProductListing/App";
import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import FilterGroup from "../../components/FilterGroup/App";
import "./style.css";
import SectionResultados from "../../components/SectionResultados/App";


export default function ProductListingPage() {
  return (
    <>
      <Layout>
        <SectionResultados/>
        <FilterGroup/>
        <ProductListing></ProductListing>
      </Layout>
    </>
  );
}
